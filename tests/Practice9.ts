import * as exceljs from "exceljs";

async function readExcel(): Promise<void> {
  const wb = new exceljs.Workbook();
  await wb.xlsx.readFile("/Users/prasanthgk/Documents/Excels/SampleData.xlsx");
  const sheet1 = wb.getWorksheet("Sheet 1");
  sheet1?.eachRow((row, rowNo) => {
    row.eachCell((cell, colNo) => {
      console.log(cell.value);
    });
  });
}
// readExcel();
async function ExcelTOJSON(path: string): Promise<void> {
  const Workbook = new exceljs.Workbook();
  await Workbook.xlsx.readFile(path);
  const sheet = await Workbook.getWorksheet(1);

  let jsonData: any[] = [];
  // headers as first row
  const headerRow = sheet?.getRow(1);
  let headers: string[] = [];
  headerRow?.eachCell((cell, colNo) => {
    headers.push(cell.value?.toString() || `column${colNo}`);
  });
  console.log(headers);
}
ExcelTOJSON("/Users/prasanthgk/Documents/Excels/SampleData.xlsx");
