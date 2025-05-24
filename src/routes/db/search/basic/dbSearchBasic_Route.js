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

// 검색기능
// 주의. SQLite의 비트윈절 쓰게되면, 예를들어
// WHERE datetime BETWEEN '2025-01-01' AND '2025-01-02'
// 이런 문장을 쓰게 될 시 날짜 범위처리 방식 때문에
// '2025-01-01 00:00:00' AND '2025-01-02 00:00:00' 로 된다. 즉 48시간을 검색하는게 아닌 24시간만 검색하게 됨.
// 다른 SQL 들 과는 다른 방식을 보여줌.