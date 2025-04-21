const express        = require('express');
const router         = express.Router();

router.get(['/','/form'], async (req, res) => {

    res.render('fe/form/rowsubmit/form', {});
});

router.post('/submit', async (req, res) => {

    let listTitle   = req.body.title;
    let listName    = req.body.name;
    let listContent = req.body.content;
    let list        = [];

    for(let i = 0; i < listTitle.length; i++) {
        list.push({
              title   : listTitle[i]
            , name    : listName[i]
            , content : listContent[i]
        });
    }
    res.redirect('/fe/form/row-submit/form');
});

module.exports = router;