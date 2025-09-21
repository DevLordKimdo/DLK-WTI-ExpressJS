const express        = require('express');
const router         = express.Router();
const uixForm_Model  = require(global.rootPath + '/models/uixForm_Model');

router.get(['/','/form'], async (req, res) => {

    let listUser = uixForm_Model.listUser();

    res.render('uix/form/searchselectbox/form', {listUser : listUser});
});

router.post('/submit', async (req, res) => {

    console.log('username : ',req.body.username);
    console.log('manages  : ',req.body.manages);

    res.redirect('/tmpl' + '/uix/form/search-selectbox/form');
});

module.exports = router;