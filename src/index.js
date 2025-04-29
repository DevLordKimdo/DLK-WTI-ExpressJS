const express     = require('express');
const config      = require('config');
const path        = require('path');
const app         = express();
const session     = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);

// global 경로 설정
global.rootPath   = path.resolve('src');
global.viewPath   = path.join(__dirname, 'views');

global.dbConf     = path.join(__dirname, '../config/database');
global.dbInitQry  = path.join(__dirname, '../config/StartQuery.sql');
global.dbFilePath = path.join('C:/SQL/database.db');

global.fioPath    = path.join('C:/fio');

// 정적파일 디렉토리 설정 (css, js, img)
app.use(express.static(path.resolve('static')));

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', global.viewPath);
app.set('view cache', false);

// server 설정
const svrConf = config.get('server');
const svrPort = svrConf.port;

// JSON 형식의 요청 본문을 파싱
app.use(express.json());

// URL 인코딩된 요청 본문을 파싱
app.use(express.urlencoded({extended: false}));

// 세션 설정
app.use(session({
    secret            : '1234', // 세션 암호화 키
    resave            : false,  // 세션이 변경되지 않았더라도 다시 저장할지 여부
    saveUninitialized : false,  // 초기화되지 않은 세션을 저장할지 여부
    store             : new SQLiteStore(
        { db: ':memory:' }                  // 세션 저장소 설정. SQLite 의 메모리 저장소 모듈을 사용. (메모리모드)
    //  { db: 'sessions.db', dir: './db' }  // (로컬모드, 경로는 './db')
    )
}));

// 라우팅 매핑
app.use('/'                      , require(global.rootPath + '/routes/main/main_rts'));
app.use('/be/http/prg-pattern'   , require(global.rootPath + '/routes/be/http/prgpattern/beHttpPrgpattern_rts'));
app.use('/db/crud/basic'         , require(global.rootPath + '/routes/db/crud/basic/dbCrudBasic_rts'));
app.use('/db/form/row-submit'    , require(global.rootPath + '/routes/db/form/rowsubmit/dbFormRowsubmit_rts.js'));
app.use('/fio/board/basic'       , require(global.rootPath + '/routes/fio/board/basic/fioBoardBasic_rts'));
app.use('/fio/crud/basic'        , require(global.rootPath + '/routes/fio/crud/basic/fioCrudBasic_rts'));
app.use('/fio/updown/basic'      , require(global.rootPath + '/routes/fio/updown/basic/fioUpdownBasic_rts'));
app.use('/fe/form/input-disable' , require(global.rootPath + '/routes/fe/form/inputdisable/feFormInputdisable_rts.js'));
app.use('/fe/form/row-submit'    , require(global.rootPath + '/routes/fe/form/rowsubmit/feFormRowsubmit_rts.js'));

app.listen(svrPort);