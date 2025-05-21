const express        = require('express');
const router         = express.Router();
const dbCrud_Model   = require(global.rootPath + '/models/dbCrud_Model');

router.get(['/','/form'], async (req, res) => {

    res.render('db/transactional/basic/form', {});
});

router.post(['/','/form'], async (req, res) => {

    let errorOption   = req.body.errorOption;
    let transOption   = req.body.transOption;

    let form          = {};
    form.title        = req.body.title;
    form.name         = req.body.name;
    form.content      = req.body.content;

    let errorForm     = {};
    errorForm.title   = null;
    errorForm.name    = null;
    errorForm.content = null;

    if(transOption == 'Y') {
        dbCrud_Model.creaetWithTrans(form, errorForm, errorOption);
    } else {
        dbCrud_Model.create(form);
        if(errorOption == 'Y') { dbCrud_Model.create(errorForm); }
    }

    res.redirect('/tmpl' + '/db/transactional/basic/form');
});

module.exports = router;

// 노드JS와 익스프레스 better-sqlite3 모듈을 이용한 트랜잭션 예제
// DB 작업 도중 하나라도 문제가 생기면 전체 작업하던 것을 모두 롤백시킴
// better-sqlite3 모듈에 특별한 트랜잭션 적용 기능 자체가 없음.
// 그래서 직접 TCL 명령어를 입력하여 DB 조작을 해야함.
// 로직 단에 트랜잭션을 걸 수 있는 마땅한 방법은 dbConf 를 또 불러와서 트랜잭션 명령어를 실행 하는 방법뿐인데
// 코드가 지저분하고 일관성이 없어지므로 model 영역에 creaetWithTrans 라는 트랜잭션 명령어가 섞인 함수를 하나 추가 시킴.