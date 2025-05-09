const express        = require('express');
const router         = express.Router();

router.get(['/','/index'], async (req, res) => {

    res.render('auth/cookie/basic/index', {});
});

router.get('/request-backend', async (req, res) => {

    res.cookie('backendCookie','value',{
        path     : req.baseUrl,        // 경로
        maxAge   : 3600 * 1000,        // 유효시간
        httpOnly : true,               // 클라이언트 스크립트에서 접근 불가 
        secure   : true,               // 보안옵션(https 연결 전용 옵션)
        // domain: 'example.com'       // 도메인 설정 (필요한 경우)
    });

    res.redirect('/tmpl' + '/auth/cookie/basic/index');
});

router.get('/check-cookie', async (req, res) => {

    console.log(req.cookies);

    res.redirect('/tmpl' + '/auth/cookie/basic/index');
});

module.exports = router;

// 쿠키 발행은 상관 없으나 클라이언트의 쿠키 값을 읽기 위해서는 cookie-parser 모듈이 필요.
// cookie-parser 모듈을 사용하지 않는다면 req.headers.cookie 로 쿠키 값을 가져와 직접 수정해야 함.