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

    delete req.session.sessionName;

    res.redirect('/tmpl' + '/auth/session/basic/index');
});

module.exports = router;