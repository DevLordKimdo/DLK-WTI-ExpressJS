const express        = require('express');
const router         = express.Router();
const db_crud_mdl    = require(global.rootPath + '/models/db/crud/db_crud_mdl');

router.get('/', async (req, res) => {

    let qryparams = {};
    qryparams.idx = 0;

    let testlist = db_crud_mdl.testqry(qryparams);

    res.render('db/crud/basic/list', {
        testlist : testlist
    });
});

module.exports = router;