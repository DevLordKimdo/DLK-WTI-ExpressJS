const express        = require('express');
const router         = express.Router();

router.get(['/','/index'], async (req, res) => {

    let value = req.session.temp;
    delete req.session.temp;

    res.render('logic/http/prgpattern/index', {value : value});
});

router.post('/submit-post', async (req, res) => {

    let value = req.body.value;
    req.session.temp = value;

    res.redirect('/tmpl' + '/logic/http/prg-pattern/index');
});

module.exports = router;

// PRG패턴 구현
// express 모듈에서는 자바 스프링 처럼 리다이렉트 해줄 때 값을 태워서 보내는 addFlashAttribute() 기능이 없음.
// 세션에 임시 값을 저장 후 리다이렉트 이동 한 다음 임시 세션값을 삭제하는 로직으로 PRG 패턴을 구현함