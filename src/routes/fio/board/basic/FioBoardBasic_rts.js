const express       = require('express');
const router        = express.Router();
const fioBoard_mdl  = require(global.rootPath + '/models/fioBoard_mdl');

router.get(['/','/list'], async (req, res) => {
    
    let prevGroupIdx;
    let currentGroupIdx;
    let list = fioBoard_mdl.list();
    
    // 객체배열의 key 이름을 변경하는 작업. group_idx -> groupIdx , group_count -> groupCount
    list = list.map(item => {
        let { group_idx, group_count, ...rest } = item;
        return { groupIdx: group_idx, groupCount: group_count, ...rest };
    });

    if (list.length) {
        prevGroupIdx = list[0].groupIdx;

        for (let i = 1; i < list.length; i++) {
            currentGroupIdx = list[i].groupIdx;

            if (currentGroupIdx != null && currentGroupIdx == prevGroupIdx) {
                list[i].groupIdx = null;
            } else {
                prevGroupIdx = currentGroupIdx;
            }
        }
    }
    res.render('fio/board/basic/list', { list : list });
});

module.exports = router;