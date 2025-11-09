const express     = require('express');
const router      = express.Router();
const fs          = require('fs');
const fsPromises  = require('fs/promises');
const multer      = require('multer');
const mime        = require('mime-types');

// multer 설정
const storage = multer.diskStorage({
    // 파일 경로 지정
    destination: function(req, file, cb) { cb(null, process.env.FIO_PATH); },
    // 파일 이름 지정
    filename   : function(req, file, cb) { cb(null, file.originalname); }
});

// upload 설정
const upload = multer({ storage: storage });

router.get(['/','/form'], async (req, res) => {

    res.render('fio/updown/basic/form', {});
});

router.get('/sample-download', async (req, res) => {

    let sampleFile     = 'sample.png';
    let sampleFilePath = process.env.FIO_PATH + '/' + sampleFile;
    let filestream     = fs.createReadStream(sampleFilePath);
    let mimeType       = mime.lookup(sampleFile) || 'application/octet-stream';
    
    // 다운로드. mime 타입을 적용하는 방법
    res.setHeader('Content-Disposition', `attachment; filename="${sampleFile}"`);
    res.setHeader('Content-Type', mimeType);

    // 다운로드 옵션2. mime 타입을 지정하지 않고 무조건 모두 다운로드 하는 방법
    // res.setHeader('Content-Disposition', `attachment; filename="${sampleFile}"`);
    // res.setHeader('Content-Type', 'application/octet-stream');

    filestream.pipe(res);
});


router.post('/single-upload', upload.single('singleUpload'), async (req, res) => {
    
    res.redirect('/tmpl' + '/fio/updown/basic/form');
});

router.post('/multi-upload', upload.array('multiUpload','20'), async (req, res) => {
    // 최대 20개 업로드 허용
    res.redirect('/tmpl' + '/fio/updown/basic/form');
});

router.post('/delete-target', async (req, res) => {

    let deleteTarget = req.body.deleteTarget;
    let filePath     = process.env.FIO_PATH + '/' + deleteTarget;

    if (fs.existsSync(filePath)) {
        try {
            await fsPromises.rm(filePath);
            console.log(deleteTarget + ' 파일이 삭제되었습니다.');
        } catch (err) {
            console.log(deleteTarget + ' 파일 삭제에 실패했습니다.' + err);
        }
    } else {
        console.log(deleteTarget + ' 파일이 존재하지 않습니다.');
    }

    res.redirect('/tmpl' + '/fio/updown/basic/form');
});

router.get('/delete-all', async (req, res) => {

    let files = await fsPromises.readdir(process.env.FIO_PATH);
    for(const file of files) {
        await fsPromises.rm(process.env.FIO_PATH + '/' + file);
    }

    res.redirect('/tmpl' + '/fio/updown/basic/form');
});

module.exports = router;

// 파일 업/다운로드 예제 소스 구현
// 주의 fio 경로 (C:/fio) 폴더가 있어야 할것. (없어도 자동으로 생성되는 코드는 적용되어 있음)
// 주의 sample-Download 기능을 사용하기 위해서는 C:/fio/sample.png 경로의 파일이 있어야 함.