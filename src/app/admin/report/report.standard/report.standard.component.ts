import { Component } from '@angular/core';
import {ReportViewService} from "../report.view.service";
import {Router} from "@angular/router";
import {routing} from "../../../routing";
import {StandardReports} from "../../../domain/standard/Standard";

@Component({
  selector: 'app-report.standard',
  templateUrl: './report.standard.component.html',
  styleUrl: './report.standard.component.scss'
})
export class ReportStandardComponent {
  standard!: StandardReports
  constructor(
    private viewService: ReportViewService,
    private router: Router
  ) {
    if(this.viewService.selectedStandard){
      this.standard = this.viewService.selectedStandard
    }else{
      this.router.navigate([routing.admin.report.manage])
    }
  }
}
