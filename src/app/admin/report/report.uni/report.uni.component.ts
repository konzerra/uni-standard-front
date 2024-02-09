import { Component } from '@angular/core';
import {Report} from "../../../domain/report/Report";
import {Router} from "@angular/router";
import {routing} from "../../../routing";
import {ReportViewService} from "../report.view.service";

@Component({
  selector: 'app-report.uni',
  templateUrl: './report.uni.component.html',
  styleUrl: './report.uni.component.scss'
})
export class ReportUniComponent {

  report!: Report
  constructor(
    private viewService: ReportViewService,
    private router: Router
  ) {
    if(this.viewService.selectedReport){
      this.report = this.viewService.selectedReport
    }else{
      this.router.navigate([routing.admin.report.manage])
    }

  }
}
