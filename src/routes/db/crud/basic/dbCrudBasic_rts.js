const express        = require('express');
const router         = express.Router();
const dbCrud_mdl     = require(global.rootPath + '/models/dbCrud_mdl');


router.get(['/','/list'], async (req, res) => {

    let list = dbCrud_mdl.list();

    res.render('db/crud/basic/list', {list : list});
});

router.get('/create', async (req, res) => {

    res.render('db/crud/basic/create', {});
});

router.post('/create', async (req, res) => {

    let form = {
        title   : req.body.title,
        content : req.body.content,
        name    : req.body.name
    }

    dbCrud_mdl.create(form);
    
    res.redirect('/db/crud/basic/list');
});

router.get('/read/:idx', async (req, res) => {

    let idx = req.params.idx;

    dbCrud_mdl.updateHit(idx);
    let read = dbCrud_mdl.read(idx);

    res.render('db/crud/basic/read', {read : read});
});

router.post('/update/:idx', async (req, res) => {

    let form = {
         title   : req.body.title
        ,content : req.body.content
        ,name    : req.body.name
        ,idx     : req.params.idx
    }

    dbCrud_mdl.update(form);

    res.redirect('/db/crud/basic/read/' + form.idx);
});

router.get('/delete/:idx', async (req, res) => {

    let idx = req.params.idx;

    dbCrud_mdl.deletePost(idx);

    res.redirect('/db/crud/basic/list');
});

module.exports = router;