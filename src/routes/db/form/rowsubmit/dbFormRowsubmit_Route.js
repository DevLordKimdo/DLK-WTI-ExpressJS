const express        = require('express');
const router         = express.Router();
const dbCrud_Model     = require(global.rootPath + '/models/dbCrud_Model');

router.get(['/','/form'], async (req, res) => {

    res.render('db/form/rowsubmit/form', {});
});

router.post('/submit', async (req, res) => {

    let listTitle    = req.body.title;
    let listUsername = req.body.username;
    let listContent  = req.body.content;

    for(let i = 0; i < listTitle.length; i++) {
        let form          = {};
            form.title    = listTitle[i];
            form.username = listUsername[i];
            form.content  = listContent[i];

        dbCrud_Model.create(form);
    }

    res.redirect('/tmpl' + '/db/form/row-submit/form');
});

module.exports = router;