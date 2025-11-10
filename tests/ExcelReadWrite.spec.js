import { test, expect } from "@playwright/test";
const ExcelJs = require("exceljs");

let cellCoOrdinated = { row: -1, column: -1 };
let changeCoOrdinates = { rowChange: 0, colChange: 2 };
// const DwdExcel = "/Users/prasanthgk/Downloads/download.xlsx";
const searchText = "Mango";
const replaceText = "777";

async function ExcelCellReplace(
  filePath,
  sheetName,
  rowNo,
  colNo,
  replaceText,
  changeCoOrdinates
) {
  const wb = new ExcelJs.Workbook();
  await wb.xlsx.readFile(filePath);
  const wsheet = wb.getWorksheet(sheetName);
  const OrgCellValue = wsheet.getCell(
    rowNo + changeCoOrdinates.rowChange,
    colNo + changeCoOrdinates.colChange
  );
  console.log(`${OrgCellValue} replaced with ${replaceText}`);
  OrgCellValue.value = replaceText;
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
  await page.goto(
    "https://rahulshettyacademy.com/upload-download-test/index.html"
  );
  const dwdEvent = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download" }).click();
  const download = await dwdEvent;
  const dwdfilePath = await download.path();
  console.log(`Downloaded File Path : ${dwdfilePath}`);
  await FindCellCoOrdinated(dwdfilePath, "Sheet1", searchText);
  await ExcelCellReplace(
    dwdfilePath,
    "Sheet1",
    cellCoOrdinated.row,
    cellCoOrdinated.column,
    replaceText,
    changeCoOrdinates
  );
  await page.locator("#fileinput").click();
  await page.locator("#fileinput").setInputFiles(dwdfilePath);
  const desiredText = page.getByText(searchText);
  const reqRow = await page.getByRole("row").filter({ has: desiredText });
  await expect(reqRow.locator("#cell-4-undefined")).toContain(replaceText);
  // await page.pause();
});
