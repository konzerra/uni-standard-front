import {Component} from '@angular/core';
import {PublicViewService} from "../public.view.service";
import {Report} from "../../domain/report/Report";
import {Router} from "@angular/router";
import {routing} from "../../routing";

@Component({
  selector: 'app-report.details',
  templateUrl: './report.details.component.html',
  styleUrl: './report.details.component.scss'
})
export class ReportDetailsComponent {

  report!: Report

  constructor(
    private viewService: PublicViewService,
    private router: Router
  ) {
    if(this.viewService.selectedReport){
      this.report = this.viewService.selectedReport
    }else{
      this.router.navigate([routing.public.home])
    }

  }
}
