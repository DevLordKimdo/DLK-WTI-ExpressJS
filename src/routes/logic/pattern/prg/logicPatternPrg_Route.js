const express        = require('express');
const router         = express.Router();

router.get(['/','/index'], async (req, res) => {

    let preContent = req.session.content || null;
    delete req.session.content;

    res.render('logic/pattern/prg/index', {preContent : preContent});
});

router.post('/submit', async (req, res) => {

    req.session.content = req.body.content;

    res.redirect('/tmpl' + '/logic/pattern/prg/done');
});

router.get('/done', async (req, res) => {

    res.render('logic/pattern/prg/done');
});

module.exports = router;

// PRG패턴 구현
// 사용자가 POST 제출 후 뒤로가기를 하여 다시 재전송 하는 상황을 방지하기 위한 패턴
// 참고. express 모듈에서는 자바 스프링 처럼 리다이렉트 해줄 때 값을 태워서 보내는 addFlashAttribute() 기능이 없음.
// 세션에 임시 값을 저장 후 리다이렉트 이동 한 다음 임시 세션값을 삭제하도록 설계해야 함.