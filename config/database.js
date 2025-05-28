const fs       = require('fs');
const sqlite3  = require('better-sqlite3');
const config   = require('config');
const dbConfig = config.get('database');

// 데이터베이스 옵션 지정
const dbOption = {
  readonly    : dbConfig.readonly,     // 읽기 전용. SELECT만 가능, CUD문 불가.
  timeout     : dbConfig.timeout,      // 데이터베이스 연결 시 시간제한 timeout (ms)
  memoryLimit : dbConfig.memoryLimit,  // 메모리 사용량 제한 (바이트) SQLite가 사용할 수 있는 최대 메모리.
  pageSize    : dbConfig.pageSize,     // 데이터베이스 페이지 크기
  mode        : dbConfig.mode          // 동시성 제어. (normal / exclusive) 다른 서비스에서 해당 DB를 제어 가능 여부 옵션
}

// 데이터베이스 연결 생성
let MemOption;

if(dbConfig.memory === true) { // 메모리 모드
  MemOption = ':memory:';
} else { // 파일모드
  MemOption = global.dbFilePath;
}

const db    = sqlite3(MemOption, dbOption);

// 저널모드.  데이터베이스 변경사항을 어떻게 추적하고 저장할지 결정. (주의. 메모리모드에서는 사용불가. 파일모드에서만 사용가능)
// (delete / truncate / persist / memory / wal / off)
// wal : 변경사항을 별도의 WAL 파일에 기록. 읽기와 쓰기 작업을 동시에 처리
if (dbConfig.journal && dbConfig.journal !== 'delete') { 
  db.pragma(`journal_mode = ${dbConfig.journal}`); 
}

// 초기화 모드 실행 코드
if(dbConfig.init === true) {
  try {
    const dbInitQry = fs.readFileSync(global.dbInitQry, 'utf8');
    db.exec(dbInitQry);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { db };