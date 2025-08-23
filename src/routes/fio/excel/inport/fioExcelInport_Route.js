const express        = require('express');
const router         = express.Router();
const multer         = require('multer');
const ExcelJS        = require('exceljs');
const fioExcel_Model = require(global.rootPath + '/models/fioExcel_Model');

const upload = multer({
    storage: multer.memoryStorage(), // 메모리에만 저장
    fileFilter: function (req, file, cb) {
        // 엑셀 파일만 허용
        const allowedTypes = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
            'application/vnd.ms-excel', // .xls
            'text/csv' // .csv
        ];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('엑셀 파일(.xlsx, .xls) 또는 CSV 파일만 업로드 가능합니다.'));
        }
    },
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB 제한
    }
});

router.get(['/','/form'], async (req, res) => {

    res.render('fio/excel/inport/form', { });
});

router.post('/upload', upload.single('excelUpload'), async (req, res) => {

    if(!req.file || !req.file.buffer) {
        console.log('파일 미업로드');
        res.redirect('/tmpl' + '/fio/excel/inport/form');
        return;
    }
    let workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(req.file.buffer);

    let worksheet = workbook.getWorksheet("Sheet1"); // 시트 이름 검색
    let dataList = [];

    if(!worksheet) { console.log('Sheet1을 찾을 수 없습니다.'); }
    
    // 엑셀의 데이터를 뽑아 객체배열을 만드는 과정.
    for (let rowNum = 2; rowNum <= worksheet.rowCount; rowNum++) {
        let row = worksheet.getRow(rowNum);
        let rowData = [];

        // 고정방식. 무조건 아래의 틀을 지켜야함 (첫번째열 title, 두번째열 username, 세번째열 content)
        // | title | username  | content |
        // | ...   | ...       | ...     |
        // | ...   | ...       | ...     |
        for (let colNum = 1; colNum <= 3; colNum++) {
            let cell = row.getCell(colNum);
            let value = cell.value;
            rowData.push(value);
        }

        let data = {
            title  : rowData[0],
            username   : rowData[1],
            content: rowData[2]
        };

        dataList.push(data);
    }

    fioExcel_Model.excelUpload(dataList);

    res.redirect('/tmpl' + '/fio/excel/inport/form');
});

module.exports = router;

// 엑셀을 전송하면 그 내용을 토대로 DB에 입력하는 기능
// 코드 구조 상 지정한 엑셀 양식을 무조건 따라야 하는 단점이 있음 (범용성이 없음)