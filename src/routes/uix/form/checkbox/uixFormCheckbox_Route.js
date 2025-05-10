const express        = require('express');
const router         = express.Router();
const dbCrud_Model   = require(global.rootPath + '/models/dbCrud_Model');

router.get(['/','/list'], async (req, res) => {

    let list = dbCrud_Model.list();

    res.render('uix/form/checkbox/list', {list : list});
});

router.post('/copy', async (req, res) => {

    let copyList = [];
    if(req.body.checkIdx) {
        // checkIdx 값이 2개 이상일때는 배열로 들어오나 1개 일때는 String 값이 되므로 강제적으로 배열 타입으로 지정해주는 작업
        copyList = Array.isArray(req.body.checkIdx) ? req.body.checkIdx : [req.body.checkIdx];
    }

    for(const copy of copyList) {
        let read         = dbCrud_Model.read(copy);
        let data         = {};
            data.title   = read.title;
            data.name    = read.name;
            data.content = read.content;
        dbCrud_Model.create(data);
    }

    res.redirect('/tmpl' + '/uix/form/checkbox/list');
});

router.post('/update', async (req, res) => {

    let form      = {};
    form.title    = req.body.title;
    form.name     = req.body.name;
    form.content  = req.body.content;
    form.hit      = req.body.hit;
    form.idx      = req.body.checkIdx.join(',');
    dbCrud_Model.updateMulti(form);

    res.redirect('/tmpl' + '/uix/form/checkbox/list');
});

router.post('/delete', async (req, res) => {

    let idxList = req.body.checkIdx.join(',');
    dbCrud_Model.deleteMulti(idxList);

    res.redirect('/tmpl' + '/uix/form/checkbox/list');
});

module.exports = router;