const express       = require('express');
const router        = express.Router();
const multer        = require('multer');
const fioBoard_mdl  = require(global.rootPath + '/models/fioBoard_mdl');

// multer 설정
const storage = multer.diskStorage({
    // 파일 경로 지정
    destination: function(req, file, cb) { cb(null, global.fioPath); },
    // 파일 이름 지정
    filename   : function(req, file, cb) { cb(null, file.originalname); }
});

// upload 설정
const upload = multer({ storage: storage });

router.get(['/','/list'], async (req, res) => {
    
    let prevGroupIdx;
    let currentGroupIdx;
    let list = fioBoard_mdl.list();
    
    // 객체배열의 key 이름을 변경하는 작업. group_idx -> groupIdx , group_count -> groupCount
    list = list.map(item => {
        let { group_idx, group_count, ...rest } = item;
        return { groupIdx: group_idx, groupCount: group_count, ...rest };
    });

    // GroupIdx 그룹화. 같은 GroupIdx 번호 끼리는 대표자 번호를 제외한 나머지 GroupIdx 는 null로 변환
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

router.post('/upload', upload.array('upload','20'), async (req, res) => {

    let newGroupIdx = fioBoard_mdl.newGroupIdx();

    // 순차적으로 DB에 INSERT
    for(let i = 0; i < req.files.length; i++) {
        let uploadList          = {};
            uploadList.groupIdx = newGroupIdx;
            uploadList.name     = req.files[i].originalname;
            uploadList.size     = req.files[i].size;
            uploadList.seq      = i+1;
        fioBoard_mdl.upload(uploadList);
    }

    res.redirect('/template' + '/fio/board/basic/list');
});

module.exports = router;