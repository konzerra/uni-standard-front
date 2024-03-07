import {Component, OnInit} from '@angular/core';
import {StandardReports} from "../../domain/standard/Standard";
import {StandardService} from "../../domain/standard/standard.service";
import {PublicViewService} from "../../public/public.view.service";
import {Router} from "@angular/router";
import {Report} from "../../domain/report/Report";
import {routing} from "../../routing";
import {PrivateViewService} from "../private.view.service";

@Component({
  selector: 'app-private.data',
  templateUrl: './private.data.component.html',
  styleUrl: './private.data.component.scss'
})
export class PrivateDataComponent implements OnInit{
  selectedStandard: StandardReports | null = null
  standardReports: StandardReports[] = []
  constructor(
    private standardService: StandardService,
    private viewService: PrivateViewService,
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
    this.router.navigate([routing.private.report], {queryParams: {id: report.id}})
  }
}
