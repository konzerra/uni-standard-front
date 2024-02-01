import {Component, OnInit} from '@angular/core';
import {Standard, StandardReports} from "../../domain/standard/Standard";
import {StandardService} from "../../domain/standard/standard.service";
import {PublicViewService} from "../public.view.service";
import {Report} from "../../domain/report/Report";
import {Router} from "@angular/router";
import {routing} from "../../routing";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  selectedStandard: StandardReports | null = null
  standardReports: StandardReports[] = []
  constructor(
    private standardService: StandardService,
    private viewService: PublicViewService,
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
}
