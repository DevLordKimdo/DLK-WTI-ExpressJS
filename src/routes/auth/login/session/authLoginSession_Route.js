const express        = require('express');
const router         = express.Router();

const checkSession = (req, res, next) => {

    const username = req.session.username

    if(username === 'admin') {
        next();
    } else {
        res.redirect('/tmpl' + '/auth/login/session/login');
    }
};

router.get(['/','/index'], checkSession, async (req, res) => {

    res.render('auth/login/session/index', {});
});

router.get(['/login'], async (req, res) => {

    const username = req.session.username

    if(username === 'admin') {
        res.redirect('/tmpl' + '/auth/login/session/index');
    } else {
        res.render('auth/login/session/login', {});
    }
});

router.post(['/login'], async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if(username === 'admin' && password === '1234') {
        req.session.username = 'admin';
    }

    res.redirect('/tmpl' + '/auth/login/session/index');
});

router.post(['/logout'], async (req, res) => {

    req.session.destroy();

    res.redirect('/tmpl' + '/auth/login/session/login');
});

module.exports = router;