import * as excelJS from "exceljs";
import fs from "fs";

async function printExcelData(input: string): Promise<void> {
  const excel = new excelJS.Workbook();
  const fileExcel = await excel.xlsx.readFile(input);
  const sheet = fileExcel.getWorksheet("Sheet1");
  sheet?.eachRow((row, rowNo) => {
    row.eachCell((cell, colNo) => {
      console.log(cell.value);
    });
  });
}
// console.log(async () => {
//   await printExcelData("/Users/prasanthgk/Downloads/Book.xlsx");
// });

async function excelToJSON(input: string): Promise<string> {
  const excel = new excelJS.Workbook();
  const outputFile = " ./testData2.json";
  await excel.xlsx.readFile(input);
  console.log(`Sheets Found : ${excel.worksheets.map((ws) => ws.name)}`);
  const allData: any = [];
  const data: any = [];
  excel.worksheets.forEach((workSheet) => {
    const keys: any = [];
    const testData: any = [];

    workSheet.eachRow((row, rowNo) => {
      const key = row.getCell(1).value;
      if (key) keys[rowNo] = key;
    });

    for (let col = 2; col <= workSheet.columnCount; col++) {
      workSheet.eachRow((row, rowNo) => {
        const key = keys[rowNo];
        if (key) data[key] = row.getCell(col).value;
      });
    }

    if (Object.values(data).some((v) => v! == "")) {
      allData.push({
        sheet: workSheet.name,
        ...data,
      });
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(allData, null, 2));
  return outputFile;
}
excelToJSON("/Users/prasanthgk/Downloads/Book.xlsx");
