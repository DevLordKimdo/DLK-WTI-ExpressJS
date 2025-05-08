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

router.get('/read/:name', async (req, res) => {

    let fileName = req.params.name;
    let filePath = global.fioPath + '/' + fileName;
    let read     = {};

    read.name    = fileName;
    // 파일 내용 불러오기
    read.content = await fsPromises.readFile(filePath, 'utf-8');

    res.render('fio/crud/basic/read', {read : read});
});

router.post('/update/:preName', async (req, res) => {

    let preName     = req.params.preName;
    let content     = req.body.content;
    let name        = req.body.name;
    let filePath    = global.fioPath + '/' + preName;
    let newFilePath = global.fioPath + '/' + name;

    // 파일 내용 수정
    await fsPromises.writeFile(filePath, content, 'utf-8');

    // 파일 이름 변경
    if (preName !== name) {
        await fsPromises.rename(filePath, newFilePath);
    }

    res.redirect('/template' + '/fio/crud/basic/read/' + name);
});

router.get('/delete/:name', async (req, res) => {

    let name        = req.params.name;
    let filePath    = global.fioPath + '/' + name;

    // 파일 삭제
    await fsPromises.rm(filePath);

    res.redirect('/template' + '/fio/crud/basic/list');
});

module.exports = router;

// 물리적인 파일 CRUD 기능.
// 선행작업으로 C:/fio 경로의 폴더 만들기 필요.
// 주의. 한글로 입력/생성/저장 할 시 유니코드 오류가 발생되므로 영어로만 작성할것.
// 주의. 텍스트로 입력된 파일만 넣을 것.
// 비동기 모듈 fs와 동기식 모듈 fsPromises 를 혼용해서 사용함. fsPromises는 특정 경로가 폴더인지를 확인하는 기능이 없음.
// 생각해야할 점. 물리적인 파일 생성코드를 Model 쪽으로 옮겨야 할지에 대한 부분은 더 생각해보고 추후 결정을 해야 함.
// MVC 패턴의 구조를 맞추기 위해서는 물리적인 생성 파일 기능이 Model 쪽에 있어야 하느냐
// 아니면 Model은 쿼리문 실행 코드만을 올려놓는 계층이냐 에 대한 부분을 생각해야 함.