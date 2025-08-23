const express        = require('express');
const router         = express.Router();
const dbCrud_Model   = require(global.rootPath + '/models/dbCrud_Model');

router.get(['/','/create'], async (req, res) => {

    res.render('db/crud/returnidx/create', {});
});

router.post('/create', async (req, res) => {

    let form = {
          title   : req.body.title
        , content : req.body.content
        , username    : req.body.username
    }

    let returnIdx = dbCrud_Model.createReturnIdx(form);
    console.log('Return Idx : ' , returnIdx);
    
    res.redirect('/tmpl' + '/db/crud/return-idx/create');
});

module.exports = router;

// better-sqlite3 모듈에서 run() 메소드 실행 시 아래의 결과값이 반환됨
// lastInsertRowid - 마지막으로 삽입된 행의 ROWID. 해당 테이블에 INTEGER PRIMARY KEY 로 선언된 칼럼의 마지막 idx 값을 가져옴.
// changes - 해당 쿼리로 영향을 받은 행의 수 (삽입, 수정, 삭제된 행 수)