import express from 'express';
import config  from 'config';

const app     = express();

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