import { Injectable } from '@angular/core';
import {StandardReports} from "../domain/standard/Standard";
import {Report} from "../domain/report/Report";

@Injectable({
  providedIn: 'root'
})
export class PrivateViewService {

  constructor() {
  }
  selectedStandard: StandardReports | null = null

  setStandard(standard: StandardReports){
    this.selectedStandard = standard
  }
}
