const express        = require('express');
const router         = express.Router();

router.get(['/','/form'], async (req, res) => {

    res.render('uix/form/rowsubmit/form', {});
});

router.post('/submit', async (req, res) => {

    let listTitle    = req.body.title;
    let listUsername = req.body.username;
    let listContent  = req.body.content;
    let list         = [];

    for(let i = 0; i < listTitle.length; i++) {
        list.push({
              title    : listTitle[i]
            , username : listUsername[i]
            , content  : listContent[i]
        });
    }
    console.log(list);
    res.redirect('/tmpl' + '/uix/form/row-submit/form');
});

router.get('/form-fetch', async (req, res) => {

    res.render('uix/form/rowsubmit/formfetch', {});
});

router.post('/submit-fetch', async (req, res) => {

    let list = req.body.list;

    console.log(list);
    res.send("Success");
});

module.exports = router;