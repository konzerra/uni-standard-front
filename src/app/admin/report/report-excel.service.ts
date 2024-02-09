import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';
import {StandardReports} from "../../domain/standard/Standard";
import {Report} from "../../domain/report/Report";


const formatReserve = (value: number ) => (value !== 0 ? value.toFixed(2) : '');
@Injectable({
  providedIn: 'root'
})
export class ReportExcelService {

  standardToExcel(standard: StandardReports){
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Ф.1");

    // Add title
    worksheet.getCell("A1").value = `${standard.name} ${standard.version}`;
    worksheet.getCell("A1").alignment = { vertical: "middle", horizontal: "center" };
    worksheet.mergeCells("A1:D1"); // Merge cells for the title

    worksheet.columns = [
      { key: "id", width: 10 },
      { key: "name", width: 50 },
      { key: "result", width: 20 },
      { key: "reserve", width: 20 },
    ];
    worksheet.addRow(["№","Название вуза","Итоговый показатель мониторинга","Примечание"])
    worksheet.getCell('D2').note = 'Резерв, остаток от выполненной нормы';

    standard.reports.forEach((report, index) => {
      worksheet.addRow(
        {
          id: index + 1,
          name: report.university.name,
          result: report.average.toFixed(2),
          reserve: formatReserve(report.reserve)
        });
    });

    // Add borders
    worksheet.getCell("A1").border = { top: {style:'thin'}, left: {style:'thin'}, right: {style:'thin'}, bottom: {style:'thin'} };
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        cell.border = { top: {style:'thin'}, left: {style:'thin'}, right: {style:'thin'}, bottom: {style:'thin'} };
      });
    });

    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      a.href = url;
      a.download = `Мониторинг вузов ${standard.version}.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }

  reportToExcel(report: Report){
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Ф.1");

    // Add title
    worksheet.getCell("A1").value = `${report.university.name} ${report.university.version}`;
    worksheet.getCell("A1").alignment = { vertical: "middle", horizontal: "center" };
    worksheet.mergeCells("A1:D1"); // Merge cells for the title

    worksheet.columns = [
      { key: "id", width: 10 },
      { key: "name", width: 70 },
      { key: "result", width: 20 },
      { key: "reserve", width: 20 },
    ];
    worksheet.addRow(["№","Наименование показателя","Итоговый показатель мониторинга","Примечание"])
    worksheet.getCell('D2').note = 'Резерв, остаток от выполненной нормы';
    let index = 0
    report.evaluationGroups.forEach((group) => {
      worksheet.addRow(
        {
          name: group.criteriaGroup.name,
        });
      group.evaluations.forEach((evaluation)=>{
        index++
        worksheet.addRow(
          {
            id: index,
            name: evaluation.criterion.name,
            result: evaluation.result.toFixed(2),
            reserve: formatReserve(evaluation.reserve)
          });
      })
    });
    worksheet.addRow(
      {
        name: "Средний показатель",
        result: report.average,
      });
    // Add borders
    worksheet.getCell("A1").border = { top: {style:'thin'}, left: {style:'thin'}, right: {style:'thin'}, bottom: {style:'thin'} };
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        cell.border = { top: {style:'thin'}, left: {style:'thin'}, right: {style:'thin'}, bottom: {style:'thin'} };
      });
    });

    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      a.href = url;
      a.download = `Мониторинг ${report.university.name}.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }
}
