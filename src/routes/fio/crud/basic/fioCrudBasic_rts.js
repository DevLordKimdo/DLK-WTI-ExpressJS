const express     = require('express');
const router      = express.Router();
const fsPromises  = require('fs/promises');
const fs          = require('fs');

router.get(['/','/list'], async (req, res) => {

    try {

        let list = [];
        
        // 해당 경로가 유효한지, 혹은 폴더가 맞는지 확인
        if (!fs.existsSync(global.fioPath) || !fs.statSync(global.fioPath).isDirectory()) {
            throw new Error('유효한 폴더 경로가 아닙니다.');
        }
        // 파일 이름 목록 반환
        let files = await fsPromises.readdir(global.fioPath); 
        for(const [index, file] of files.entries()) {
            let filePath = global.fioPath + '/' + file;

            // 확장자 추출
            let extension;
            let lastIndex = file.lastIndexOf('.');
            if (lastIndex > 0) { extension = file.substring(lastIndex + 1); }

            // 해당 파일의 자세한 정보 가져오기.
            let stats = await fsPromises.stat(filePath);

            list.push({
                listNo    : index + 1
                , name      : file
                , extension : extension
                , size      : stats.size
            });
        }
        res.render('fio/crud/basic/list', {list : list});
    } catch(err) {
        res.status(500).send(err.message);
    }
});

router.get('/create', async (req, res) => {

    res.render('fio/crud/basic/create', {});
});

router.post('/create', async (req, res) => {

    let filePath = global.fioPath + '/' + req.body.name;
    let content  = req.body.content;

    // 물리 파일 생성
    await fsPromises.writeFile(filePath, content, { encoding: 'utf8' });

    res.redirect('/fio/crud/basic/list');
});

module.exports = router;