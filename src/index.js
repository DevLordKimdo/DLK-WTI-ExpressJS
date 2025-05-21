const express      = require('express');
const config       = require('config');
const path         = require('path');
const app          = express();
const session      = require('express-session');
const SQLiteStore  = require('connect-sqlite3')(session);
const cookieParser = require('cookie-parser');

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

// 쿠키 설정
app.use(cookieParser());

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
app.use('/'                            , require(global.rootPath + '/routes/main/main_Route'));
app.use('/tmpl/logic/http/prg-pattern' , require(global.rootPath + '/routes/logic/http/prgpattern/logicHttpPrgpattern_Route'));
app.use('/tmpl/auth/cookie/basic'      , require(global.rootPath + '/routes/auth/cookie/basic/authCookieBasic_Route'));
app.use('/tmpl/auth/session/basic'     , require(global.rootPath + '/routes/auth/session/basic/authSessionBasic_Route'));
app.use('/tmpl/db/crud/basic'          , require(global.rootPath + '/routes/db/crud/basic/dbCrudBasic_Route'));
app.use('/tmpl/db/search/basic'        , require(global.rootPath + '/routes/db/search/basic/dbSearchBasic_Route'));
app.use('/tmpl/db/crud/return-idx'     , require(global.rootPath + '/routes/db/crud/returnidx/dbCrudReturnidx_Route'));
app.use('/tmpl/db/form/row-submit'     , require(global.rootPath + '/routes/db/form/rowsubmit/dbFormRowsubmit_Route'));
app.use('/tmpl/db/transactional/basic' , require(global.rootPath + '/routes/db/transactional/basic/dbTransactionalBasic_Route'));
app.use('/tmpl/fio/board/basic'        , require(global.rootPath + '/routes/fio/board/basic/fioBoardBasic_Route'));
app.use('/tmpl/fio/crud/basic'         , require(global.rootPath + '/routes/fio/crud/basic/fioCrudBasic_Route'));
app.use('/tmpl/fio/updown/basic'       , require(global.rootPath + '/routes/fio/updown/basic/fioUpdownBasic_Route'));
app.use('/tmpl/uix/form/checkbox'      , require(global.rootPath + '/routes/uix/form/checkbox/uixFormCheckbox_Route'));
app.use('/tmpl/uix/form/input-disable' , require(global.rootPath + '/routes/uix/form/inputdisable/uixFormInputdisable_Route'));
app.use('/tmpl/uix/form/row-submit'    , require(global.rootPath + '/routes/uix/form/rowsubmit/uixFormRowsubmit_Route'));
app.use('/tmpl/uix/iframe/basic'       , require(global.rootPath + '/routes/uix/iframe/basic/uixIframeBasic_Route'));
app.use('/tmpl/uix/popup/modal'        , require(global.rootPath + '/routes/uix/popup/modal/uixPopupModal_Route'));
app.use('/tmpl/uix/popup/send-value'   , require(global.rootPath + '/routes/uix/popup/sendvalue/uixPopupSendvalue_Route'));
app.use('/tmpl/uix/pagination/basic'   , require(global.rootPath + '/routes/uix/pagination/basic/uixPaginationBasic_Route'));

app.listen(svrPort);