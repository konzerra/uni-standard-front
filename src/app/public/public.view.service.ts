import { Injectable } from '@angular/core';
import {Report} from "../domain/report/Report";
import {StandardReports} from "../domain/standard/Standard";

@Injectable({
  providedIn:'root'
})
export class PublicViewService {

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
