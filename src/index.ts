import express from 'express';
import config  from 'config';
import path    from 'path';

const app     = express();

// 경로 설정
export const PATHS = {
    views: path.join(__dirname, 'views') // EJS 템플릿 경로 설정
};

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', PATHS.views);
app.set('view cache', false);


const svrConf = config.get('server')   as { port: number };
const svrPort = svrConf.port;

const dbConf  = config.get('database') as { port: number };
const dbPort = dbConf.port;


console.log(`Express TypeScript Demo 접속 완료.`);
console.log(`서버 접속포트 번호 : ${svrPort}`);
console.log(`DB 포트 정보 : ${dbPort}`);

app.get('/', async (req, res) => { 
    console.log('incoming index page');
    res.json('index');
});

app.listen(svrPort);