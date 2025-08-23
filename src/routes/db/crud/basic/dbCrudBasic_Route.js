const express        = require('express');
const router         = express.Router();
const dbCrud_Model     = require(global.rootPath + '/models/dbCrud_Model');

router.get(['/','/list'], async (req, res) => {

    let list = dbCrud_Model.list();

    res.render('db/crud/basic/list', {list : list});
});

router.get('/create', async (req, res) => {

    res.render('db/crud/basic/create', {});
});

router.post('/create', async (req, res) => {

    let form = {
          title   : req.body.title
        , content : req.body.content
        , username    : req.body.username
    }

    dbCrud_Model.create(form);
    
    res.redirect('/tmpl' + '/db/crud/basic/list');
});

router.get('/read/:idx', async (req, res) => {

    let idx = req.params.idx;

    dbCrud_Model.updateHit(idx);
    let read = dbCrud_Model.read(idx);

    res.render('db/crud/basic/read', {read : read});
});

router.post('/update/:idx', async (req, res) => {

    let form = {
          title   : req.body.title
        , content : req.body.content
        , username    : req.body.username
        , idx     : req.params.idx
    }

    dbCrud_Model.update(form);

    res.redirect('/tmpl' + '/db/crud/basic/read/' + form.idx);
});

router.get('/delete/:idx', async (req, res) => {

    let idx = req.params.idx;

    dbCrud_Model.deletePost(idx);

    res.redirect('/tmpl' + '/db/crud/basic/list');
});

module.exports = router;