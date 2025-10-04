const express        = require('express');
const router         = express.Router();

// index
router.get(['/','/index'], async (req, res) => {

    res.render('logic/pattern/wizard/index', { });
});


// step1
router.get('/step1', async (req, res) => {

    let prevValue = { username : req.session.username }

    res.render('logic/pattern/wizard/step1', { prevValue : prevValue });
});

router.post('/step1/back', async (req, res) => {

    res.redirect('/tmpl' + '/logic/pattern/wizard/index');
});

router.post('/step1/next', async (req, res) => {

    req.session.username = req.body.username;

    res.redirect('/tmpl' + '/logic/pattern/wizard/step2');
});

// step2
router.get('/step2', async (req, res) => {

    if(!req.session.username) {
        return res.redirect('/tmpl' + '/logic/pattern/wizard/index');
    }

    let prevValue = { title : req.session.title }

    res.render('logic/pattern/wizard/step2', { prevValue : prevValue });
});

router.post('/step2/back', async (req, res) => {

    res.redirect('/tmpl' + '/logic/pattern/wizard/step1');
});

router.post('/step2/next', async (req, res) => {

    req.session.title = req.body.title;

    res.redirect('/tmpl' + '/logic/pattern/wizard/step3');
});

// step3
router.get('/step3', async (req, res) => {

    if(!req.session.username || !req.session.title) {
        return res.redirect('/tmpl' + '/logic/pattern/wizard/index');
    }

    res.render('logic/pattern/wizard/step3', { });
});

router.post('/step3/back', async (req, res) => {

    res.redirect('/tmpl' + '/logic/pattern/wizard/step2');
});

router.post('/step3/submit', async (req, res) => {

    console.log('username:', req.session.username);
    console.log('   title:', req.session.title);
    console.log(' content:', req.body.content);
    
    delete req.session.username;
    delete req.session.title;

    res.redirect('/tmpl' + '/logic/pattern/wizard/index');
});


/* 구버전.
url 파라미터 값과 함께 get으로 요청 받으면
url 파라미터 값(?param=value) 이런 값들을 세션기록 및 제거 후 리다이렉트 시키는 구조.
router.get('/step1', async (req, res) => {

    res.render('logic/pattern/wizard/step1', { });
});

router.get('/step2', async (req, res) => {

    if(Object.keys(req.query).length > 0) {
        req.session.username = req.query.username;
        return res.redirect('/tmpl' + '/logic/pattern/wizard/step2');
    }

    if(!req.session.username) {
        return res.redirect('/tmpl' + '/logic/pattern/wizard/index');
    }

    res.render('logic/pattern/wizard/step2', { });
});

router.get('/step3', async (req, res) => {

    if(Object.keys(req.query).length > 0) {
        req.session.title = req.query.title;
        return res.redirect('/tmpl' + '/logic/pattern/wizard/step3');
    }

    if(!req.session.username || !req.session.title) {
        return res.redirect('/tmpl' + '/logic/pattern/wizard/index');
    }

    res.render('logic/pattern/wizard/step3', { });
});

router.post('/submit', async (req, res) => {

    console.log('username:', req.session.username);
    console.log('   title:', req.session.title);
    console.log(' content:', req.body.content);
    
    delete req.session.username;
    delete req.session.title;

    res.redirect('/tmpl' + '/logic/pattern/wizard/index');
});
*/

module.exports = router;