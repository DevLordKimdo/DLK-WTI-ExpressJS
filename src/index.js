const express     = require('express');
const config      = require('config');
const path        = require('path');
const app         = express();

// global 경로 설정
global.rootPath   = path.join(__dirname);
global.viewPath   = path.join(__dirname, 'views');

global.dbConf     = path.resolve(__dirname, 'db/dbconfig');
global.dbInitQry  = path.join(__dirname, 'db/startQuery.sql');
global.dbfilePath = path.resolve('C:/SQL/database.db');

// 정적파일 디렉토리 설정 (css, js, img)
app.use(express.static(path.join(__dirname, '../static')));

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

const main_rts = require(global.rootPath + '/routes/main/main_rts');
app.use('/', main_rts);

const dbCrudBasic_rts = require(global.rootPath + '/routes/db/crud/basic/dbCrudBasic_rts');
app.use('/db/crud/basic', dbCrudBasic_rts);

app.listen(svrPort);