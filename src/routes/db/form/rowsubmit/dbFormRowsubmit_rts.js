const express        = require('express');
const router         = express.Router();
const dbCrud_mdl     = require(global.rootPath + '/models/dbCrud_mdl');

router.get(['/','/form'], async (req, res) => {

    res.render('db/form/rowsubmit/form', {});
});

router.post('/submit', async (req, res) => {

    let listTitle    = req.body.title;
    let listName     = req.body.name;
    let listContent  = req.body.content;

    for(let i = 0; i < listTitle.length; i++) {
        let form         = {};
            form.title   = listTitle[i];
            form.name    = listName[i];
            form.content = listContent[i];

        dbCrud_mdl.create(form);
    }

    res.redirect('/db/form/row-submit/form');
});

module.exports = router;