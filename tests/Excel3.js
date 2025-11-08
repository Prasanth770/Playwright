// import * as ExcelJs from "exceljs";
const ExcelJs = require("exceljs");

let cellCoOrdinated = { row: -1, column: -1 };

async function ExcelCellReplace(
  filePath,
  sheetName,
  rowNo,
  colNo,
  replaceText
) {
  const wb = new ExcelJs.Workbook();
  await wb.xlsx.readFile(filePath);
  const wsheet = wb.getWorksheet(sheetName);
  const OrgCellValue = wsheet.getCell(rowNo, colNo);
  OrgCellValue.value = replaceText;
  console.log(`${OrgCellValue} replaced with ${wsheet.getCell(rowNo, colNo)}`);
  await wb.xlsx.writeFile(filePath);
}
async function FindCellCoOrdinated(filePath, sheetName, searchText) {
  const wb1 = new ExcelJs.Workbook();
  await wb1.xlsx.readFile(filePath);
  const wsheet1 = await wb1.getWorksheet(sheetName);
  wsheet1.eachRow((row, rowNumber) => {
    row.eachCell((cell, colnumber) => {
      if (cell.value === searchText) {
        cellCoOrdinated.row = rowNumber;
        cellCoOrdinated.column = colnumber;
      }
    });
  });
  return cellCoOrdinated;
}

async function runTest() {
  const sheet = "Sheet1";
  const textToFind = "Mango";
  const textToReplace = "African Mango";
  const DwdExcel = "/Users/prasanthgk/Downloads/download.xlsx";
  await FindCellCoOrdinated(DwdExcel, sheet, textToFind);
  await ExcelCellReplace(
    DwdExcel,
    sheet,
    cellCoOrdinated.row,
    cellCoOrdinated.column,
    textToReplace
  );
}
runTest();
