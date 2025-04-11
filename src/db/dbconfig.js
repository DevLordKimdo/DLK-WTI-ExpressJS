const path = require('path');
const fs = require('fs');
const database = require('better-sqlite3');

// 데이터베이스 연결 생성
const db = database('C:/SQL/database.db');

// 초기 쿼리 실행 (필요한 경우)
try {
  const sqlFilePath = path.join(__dirname, '/StartQuery.sql');
  const startQuery = fs.readFileSync(sqlFilePath, 'utf8');
  db.exec(startQuery);
  console.log('데이터베이스 초기화 완료');
} catch (err) {
  console.error('데이터베이스 초기화 오류:', err);
}

// db 객체 내보내기
module.exports = { db };