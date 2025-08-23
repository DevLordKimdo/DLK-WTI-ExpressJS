const express        = require('express');
const router         = express.Router();
const dbCrud_Model   = require(global.rootPath + '/models/dbCrud_Model');
const uixForm_Model  = require(global.rootPath + '/models/uixForm_Model');

router.get(['/','/list'], async (req, res) => {

    let list = dbCrud_Model.list();

    res.render('uix/form/checkbox/list', {list : list});
});

router.post('/copy', async (req, res) => {

    let copyList = [];

    // checkbox가 없는 상태에서 copy 했을 시 작동을 중지하는 안전장치
    if(req.body.checkIdx) {
        // checkIdx 값이 2개 이상일때는 배열로 들어오나 1개 일때는 String 값이 되므로 강제적으로 배열 타입으로 지정해주는 작업
        copyList = Array.isArray(req.body.checkIdx) ? req.body.checkIdx : [req.body.checkIdx];
    }
    copyList = JSON.stringify(copyList);
    uixForm_Model.createCopy(copyList);

    res.redirect('/tmpl' + '/uix/form/checkbox/list');
});

router.post('/update', async (req, res) => {

    let checkIdx  = Array.isArray(req.body.checkIdx) ? req.body.checkIdx : [req.body.checkIdx];
    let form      = {};
    form.title    = req.body.title;
    form.username = req.body.username;
    form.content  = req.body.content;
    form.hit      = req.body.hit;
    form.checkIdx = JSON.stringify(checkIdx);
    uixForm_Model.updateMulti(form);

    res.redirect('/tmpl' + '/uix/form/checkbox/list');
});

router.post('/delete', async (req, res) => {
    
    let checkIdx = Array.isArray(req.body.checkIdx) ? req.body.checkIdx : [req.body.checkIdx];
        checkIdx = JSON.stringify(checkIdx);
    uixForm_Model.deleteMulti(checkIdx);

    res.redirect('/tmpl' + '/uix/form/checkbox/list');
});

module.exports = router;

// better-sqlite3 모듈을 이용해 SQLite DB 쿼리 사용 시
// ... WHERE idx IN (:idx)
// ...
// db.prepare(qry).run({ ... , idx : params.idx });
// 이렇게 IN절에 직접 배열을 넣어 쿼리문 실행하는게 제한적
// 그래서
// ... WHERE idx IN (SELECT value FROM json_each(:idx))
// ...
// db.prepare(qry).run({ ... , idx : JSON.stringify(params.idx) });
// 이런식으로 JSON.stringify(array) 변환한 데이터를 넣어줘야 하는 행위를 해야함.
// 이렇게가 아니면
// params.idx = params.idx.join(',')
// ...
// ... WHERE idx IN (" + params.idx + ")
// 이렇게 db.prepare(qry).run({}); 안에 파라미터 값을 넣는게 아니라
// 직접 쿼리문 안에 파라미터 값을 넣는 방법이 있는데(하기전에 배열 파라미터를 해체시킴)
// 이건 SQLinjection 공격에 취약하므로 하지 말이야함.