const excel        = require('exceljs');

/**
 * 데이터 입력을 받으면 엑셀로 출력해주는 함수
 * @param {list<object>} list 엑셀로 변환할 DB 데이터 리스트(객체배열로 넣을 것)
 * @param {string} sheetName 시트 이름
 * @returns {workbook} 엑셀로 변환된 데이터
 */
function convert (list, sheetName) {
    // 엑셀 관련 객체 불러오기
    const workbook  = new excel.Workbook();
    const worksheet = workbook.addWorksheet(sheetName);
    
    // 리스트에 데이터가 존재하는지 확인. 없으면 데이터가 없다는 열을 집어넣음
    if (!list || list.length == 0) {
        console.log('데이터 없음');
        worksheet.addRow(['데이터가 없습니다.']);
        return workbook;
    }

    // 첫 번째 객체의 키로 헤더(칼럼) 생성
    const headers = Object.keys(list[0]);
    worksheet.columns = headers.map(header => ({
        header: header,
        key: header,
        width: 10 // 기본 너비
    }));

    // 스타일 설정 - 헤더부분 (필요할 시 스타일을 적용)
    worksheet.getRow(1).font      = { bold: true };
    worksheet.getRow(1).fill      = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE0E0E0' }  };
    worksheet.getRow(1).alignment = { vertical: 'middle',  horizontal: 'center' };

    // 데이터 추가
    list.forEach(data => {
        let row = worksheet.addRow(data);
        // 스타일 설정 - 행 부분 (필요할 시 스타일을 적용)
        row.alignment = { vertical: 'middle' };
        row.fill      = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8F8F8' } };
        row.eachCell((cell) => { cell.border = { 
            top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }
        }; });
    });

    return workbook;
}

module.exports = {
    convert
};