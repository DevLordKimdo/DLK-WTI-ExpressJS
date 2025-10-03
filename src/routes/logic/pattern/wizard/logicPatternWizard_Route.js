const express        = require('express');
const router         = express.Router();

router.get(['/','/index'], async (req, res) => {

    res.render('logic/pattern/wizard/index', { });
});

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

module.exports = router;