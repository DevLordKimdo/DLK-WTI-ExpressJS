const express        = require('express');
const router         = express.Router();

router.get(['/','/index'], async (req, res) => {

    res.render('auth/session/basic/index', {});
});

router.get('/request-session', async (req, res) => {

    req.session.sessionName = 'value';

    res.redirect('/tmpl' + '/auth/session/basic/index');
});

router.get('/check-session', async (req, res) => {

    console.log('sessionName : ' , req.session.sessionName);

    res.redirect('/tmpl' + '/auth/session/basic/index');
});

router.get('/delete-session', async (req, res) => {

    // 세션 단일 항목 삭제
    delete req.session.sessionName;
    
    // 세션 전체 삭제
    // req.session.destroy();

    res.redirect('/tmpl' + '/auth/session/basic/index');
});

module.exports = router;