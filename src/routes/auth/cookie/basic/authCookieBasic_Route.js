const express        = require('express');
const router         = express.Router();

router.get(['/','/index'], async (req, res) => {

    res.render('auth/cookie/basic/index', {});
});

router.get('/request-backend', async (req, res) => {

    // 현재 서버 도메인 이름 불러오기
    let serverName  = req.hostname;

    // 현재 서버가 SSL(https) 인증서가 적용되어있는지 확인
    let isSecure    = req.protocol === 'https';

    res.cookie('backendCookie','value',{
        path     : '/',                // 경로
        maxAge   : 3600 * 1000,        // 유효시간
        httpOnly : true,               // 클라이언트 스크립트에서 접근 불가 
        secure   : isSecure,           // 보안옵션(https 연결 전용 옵션)
        domain   : serverName,         // 도메인 설정 (필요한 경우)
        sameSite : 'lax',              // 어떤 도메인에서만 사용할 수 있는지 설정. "Strict", "lax", "None"
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