const ExcelJs = require("exceljs");

// const wb = new ExcelJs.Workbook();
// wb.xlsx
//   .readFile("/Users/prasanthgk/Documents/Excels/Data.xlsx")
//   .then(function () {
//     const sheet1 = wb.getWorksheet("Sheet 1");
//     sheet1.eachRow((row, rowNumber) => {
//       row.eachCell((cell, colNumber) => {
//         console.log(cell.value);
//       });
//     });
//   });

async function ExcelRead(rowNo, colNo) {
  const wb1 = new ExcelJs.Workbook();
  await wb1.xlsx.readFile("/Users/prasanthgk/Documents/Excels/Data.xlsx");
  const sheet1 = wb1.getWorksheet("Sheet 1");
  sheet1.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      console.log(cell.value);
    });
  });
}

ExcelRead();
