import { Injectable } from '@angular/core';
import {StandardReports} from "../../domain/standard/Standard";
import {Report} from "../../domain/report/Report";


@Injectable({
  providedIn:'root'
})
export class ReportViewService {

  constructor() {
  }
  selectedStandard: StandardReports | null = null
  selectedReport: Report | null = null
  setReport(report: Report){
    this.selectedReport = report
  }
  setStandard(standard: StandardReports){
    this.selectedStandard = standard
  }
}
