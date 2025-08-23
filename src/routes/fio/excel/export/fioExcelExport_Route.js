const express      = require('express');
const router       = express.Router();
const excel        = require('exceljs');
const dbCrud_Model = require(global.rootPath + '/models/dbCrud_Model');
const exportExcel  = require(global.rootPath + '/util/exportExcel_Util');

router.get(['/','/index'], async (req, res) => {

    res.render('fio/excel/export/index', { });
});

router.get('/down-excel', async (req, res) => {
    try {
        let list = await dbCrud_Model.list();
        // ExcelJS 워크북 생성
        const workbook  = new excel.Workbook();
        const worksheet = workbook.addWorksheet('ResultDATA');
        // 엑셀 헤더(칼럼) 설정
        worksheet.columns = [
            { header: 'idx',      key: 'idx',      width: 10 },
            { header: 'title',    key: 'title',    width: 10 },
            { header: 'username',     key: 'username',     width: 10 },
            { header: 'content',  key: 'content',  width: 10 },
            { header: 'datetime', key: 'datetime', width: 10 },
            { header: 'hit',      key: 'hit',      width: 10 },
        ];
        // 스타일 적용 (필요하면 적용)
        // worksheet.getRow(1).font = { bold: true };
        // worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE0E0E0' } };

        // 데이터 주입
        list.forEach(data => {
            worksheet.addRow({
                idx     : data.idx,
                title   : data.title,
                username    : data.username,
                content : data.content,
                datetime: data.datetime,
                hit     : data.hit
            });
        });
        // 파일명 설정
        let fileName = 'ResultDATA.xlsx';
        // 응답 Header 설정
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        // 엑셀 파일을 응답으로 전송
        await workbook.xlsx.write(res);
        res.end();
    } catch (err) {
        return err;
    }
});

// 향상된 버전. Util 쪽으로 따로 모듈화를 진행하여 작업.
// 위의 하드코딩을 하는 방식과 달리 어떤 DB 자료를 가져와도 출력되게끔 구조를 설계.
router.get('/down-excel-enhance', async (req, res) => {
    try {
        let list = await dbCrud_Model.list();
        let workbook = exportExcel.convert(list , 'data');
        // HTTP 헤더 설정 및 응답 처리
        let fileName = 'ResultDataEnhance.xlsx';
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        // 엑셀 파일을 응답으로 전송
        await workbook.xlsx.write(res);
        res.end();
    } catch(err) {
        return err;
    }
});

module.exports = router;

// DB에 있는 데이터를 받아다 엑셀로 출력하는 기능.
// 간략한 구현과 모듈로 분리한 버전(enhance) 로 나누어짐.