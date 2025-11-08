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
  OrgCellValue.value = replaceText;
  console.log(`${OrgCellValue} replaced with ${wsheet.getCell(rowNo, colNo)}`);
  await wb.xlsx.writeFile(filePath);
}
async function FindCellCoOrdinated(filePath, sheetName, searchText) {
  const wb1 = new ExcelJs.Workbook();
  await wb1.xlsx.readFile(filePath);
  const wsheet1 = wb1.getWorksheet(sheetName);
  wsheet1.eachRow((row, rowNumber) => {
    row.eachCell((cell, colnumber) => {
      if (cell.value === searchText) {
        cellCoOrdinated.row = rowNumber;
        cellCoOrdinated.column = colnumber;
      }
    });
  });
}

test.only("Excel Write", async ({ page }) => {
  //   await page.goto(
  //     "https://rahulshettyacademy.com/upload-download-test/index.html"
  //   );

  //   await page.getByRole("button", { name: "Download" }).click();
  //   const dwdEvent = page.waitForEvent("download");
  //   await dwdEvent;
  await FindCellCoOrdinated(DwdExcel, "Sheet1", "Mango");
  await ExcelCellReplace(
    DwdExcel,
    "Sheet1",
    cellCoOrdinated.row,
    cellCoOrdinated.column,
    "African Mango"
  );
  await page.locator("#fileinput").click();
  await page.locator("#fileinput").setInputFiles(DwdExcel);
  await page.pause();
});
