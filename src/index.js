const express    = require('express');
const config     = require('config');
const path       = require('path');
const app        = express();

// 경로 설정
global.rootPath  = path.join(__dirname);
global.viewPath  = path.join(__dirname, 'views');


// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', global.viewPath);
app.set('view cache', false);

const svrConf = config.get('server');
const svrPort = svrConf.port;

const dbConf  = config.get('database');
const dbPort  = dbConf.port;

console.log(`DLK-WTI-ExpressJS 접속 완료.`);
console.log(`서버 접속포트 번호 : ${svrPort}`);
console.log(`DB 포트 정보 : ${dbPort}`);

const main_rts = require(global.rootPath + '/routes/main/main_rts');
app.use('/', main_rts);

app.listen(svrPort);