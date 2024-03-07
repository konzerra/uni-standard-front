import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {routing} from "../../routing";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {ReportService} from "../../domain/report/report.service";
import {Report} from "../../domain/report/Report";

@Component({
  selector: 'app-private.report.details',
  templateUrl: './private.report.details.component.html',
  styleUrl: './private.report.details.component.scss'
})
export class PrivateReportDetailsComponent implements OnInit{

  report!: Report
  constructor(
    private dialogsService: DialogsService,
    private router:Router,
    protected route: ActivatedRoute,
    private reportService: ReportService
  ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.reportService.getById(param["id"]).subscribe({
            next:(v)=>{
              this.report = v
            },
            error:(err) =>{
              this.router.navigate([routing.private.data])
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    )
  }
}
