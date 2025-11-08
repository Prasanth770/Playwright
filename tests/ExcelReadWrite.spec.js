import { test, expect } from "@playwright/test";
const ExcelJs = require("exceljs");

let cellCoOrdinated = { row: -1, column: -1 };
const DwdExcel = "/Users/prasanthgk/Downloads/download.xlsx";

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
  const orgValue = OrgCellValue.value;
  OrgCellValue.value = replaceText;
  console.log(`${orgValue} replaced with ${OrgCellValue}`);
  await wb.xlsx.writeFile(filePath);
}
async function FindCellCoOrdinated(filePath, searchText) {
  const wb1 = new ExcelJs.Workbook();
  await wb1.xlsx.readFile(filePath);
  const wsheet1 = wb1.getWorksheet("Sheet1");
  wsheet1.eachRow((row, rowNumber) => {
    row.eachCell((cell, colnumber) => {
      if (cell.value === searchText) {
        cellCoOrdinated.row = rowNumber;

        cellCoOrdinated.column = colnumber;
        console.log(`rowNumber : ${rowNumber} ; colNumber : ${colnumber}`);
      }
    });
  });
  return cellCoOrdinated;
}

test.only("Excel Write", async ({ page }) => {
  //   await page.goto(
  //     "https://rahulshettyacademy.com/upload-download-test/index.html"
  //   );

  //   await page.getByRole("button", { name: "Download" }).click();
  //   const dwdEvent = page.waitForEvent("download");
  //   await dwdEvent;
  await FindCellCoOrdinated(DwdExcel, "Mango 901");
  await ExcelCellReplace(
    DwdExcel,
    "Sheet1",
    cellCoOrdinated.row,
    cellCoOrdinated.column,
    "Mango 91"
  );
  // await page.locator("#fileinput").click();
  // await page.locator("#fileinput").setInputFiles(DwdExcel);
  // await page.pause();
});
