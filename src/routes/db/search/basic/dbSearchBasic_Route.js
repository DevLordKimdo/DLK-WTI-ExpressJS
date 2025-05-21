const express        = require('express');
const router         = express.Router();
const dbSearch_Model = require(global.rootPath + '/models/dbSearch_Model');

router.get(['/','/list'], async (req, res) => {

    let search = {}
        search.searchOption    = null;
        search.searchKeyword   = null;
        search.searchDateStart = null;
        search.searchDateEnded = null;

    let list = dbSearch_Model.list(search);

    res.render('db/search/basic/list', { list : list , search : search });
});

router.post('/list', async (req, res) => {

    let search = {}
        search.searchOption    = req.body.searchOption;
        search.searchKeyword   = req.body.searchKeyword;
        search.searchDateStart = req.body.searchDateStart;
        search.searchDateEnded = req.body.searchDateEnded;

    let list = dbSearch_Model.list(search);

    res.render('db/search/basic/list', { list : list, search : search });
});

module.exports = router;