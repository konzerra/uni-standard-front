import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StandardReports} from "../../domain/standard/Standard";
import {StandardService} from "../../domain/standard/standard.service";
import {PublicViewService} from "../public.view.service";
import {Router} from "@angular/router";
import {Report} from "../../domain/report/Report";
import {routing} from "../../routing";
import {ReportExcelService} from "../../domain/report/report-excel.service";

@Component({
  selector: 'app-open.data',
  templateUrl: './open.data.component.html',
  styleUrl: './open.data.component.scss'
})
export class OpenDataComponent implements OnInit{
  selectedStandard: StandardReports | null = null
  standardReports: StandardReports[] = []
  constructor(
    private standardService: StandardService,
    private viewService: PublicViewService,
    private excelService: ReportExcelService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.standardService.getAllPublishedWithReports().subscribe({
      next:(v)=>{
        this.standardReports = v
        this.selectedStandard = v[0] //can throw error if array is empty
        if(this.viewService.selectedStandard){
          this.selectedStandard = this.viewService.selectedStandard
        }
      }
    })
  }


  onStandardClicked(standard: StandardReports) {
    this.selectedStandard = standard
    this.viewService.setStandard(standard)
  }

  onReportClicked(report: Report) {
    this.viewService.setReport(report)
    this.router.navigate([routing.public.report])
  }

  downloadF1(standard: StandardReports) {
    this.excelService.standardToExcelF1(standard)
  }

  downloadF2(report: Report) {
    this.excelService.reportToExcelF2(report)
  }
}
