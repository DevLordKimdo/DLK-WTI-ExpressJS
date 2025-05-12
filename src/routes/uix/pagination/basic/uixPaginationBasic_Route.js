const express             = require('express');
const router              = express.Router();
const uixPagination_Model = require(global.rootPath + '/models/uixPagination_Model');
const pagination_Util     = require(global.rootPath + '/util/pagination_Util');

router.get(['/','/list','/list/:currentPageIndex'], async (req, res) => {

    let currentPageIndex = req.params.currentPageIndex;
    // URL에 페이지 값이 매겨지지 않은 상태로 들어왔을 경우 초기 페이지 값 1을 지정함
    if(!currentPageIndex) { currentPageIndex = 1; }

    let count            = uixPagination_Model.count();
    let postsPerPage     = 10;
    let pageStartIndex   = (currentPageIndex - 1) * postsPerPage;
    let page             = pagination_Util.total(currentPageIndex, postsPerPage, count);

    let listSet              = {};
        listSet.postsPerPage = postsPerPage;
        listSet.pageStart    = pageStartIndex;

    let list = uixPagination_Model.list(listSet);

    res.render('uix/pagination/basic/list', {
          page : page
        , list : list
    });
});

router.post('/list/:currentPageIndex', async (req, res) => {

    let currentPageIndex = req.params.currentPageIndex;

    let count            = uixPagination_Model.count();
    let postsPerPage     = 10;
    let pageStartIndex   = (currentPageIndex - 1) * postsPerPage;
    let page             = pagination_Util.total(currentPageIndex, postsPerPage, count);

    let listSet              = {};
        listSet.postsPerPage = postsPerPage;
        listSet.pageStart    = pageStartIndex;

    let list = uixPagination_Model.list(listSet);

    res.render('uix/pagination/basic/list', {
          page : page
        , list : list
    });
});

module.exports = router;

// 페이징 기능
// Util 패키지의 UtilPagination 로 따로 빼놓음.
// 같은 코드를 get과 post로 빼놓은 이유는 템플릿 페이지에서 페이지 전환 시 post로 데이터를 보내기 때문.
// getList 만 쓰고싶다면 listhref.ejs 를 쓰면 된다.
// 참고 : 첫번째 페이지 번호와 마지막 페이지 번호 출력 기능도 있다.
// startPageIndex 와 lastPageIndex