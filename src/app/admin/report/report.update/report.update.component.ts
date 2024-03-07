import {Component, OnInit} from '@angular/core';
import {CustomErrorStateMatcher} from "../../../utils/CustomErrorStateMatcher";
import {StandardService} from "../../../domain/standard/standard.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ReportService} from "../../../domain/report/report.service";
import {routing} from "../../../routing";
import {ReportUpdateForm} from "./report.update.form";

@Component({
  selector: 'app-report.update',
  templateUrl: './report.update.component.html',
  styleUrl: './report.update.component.scss'
})
export class ReportUpdateComponent implements OnInit{
  form = new ReportUpdateForm()
  matcher = new CustomErrorStateMatcher();
  constructor(
    private dialogsService: DialogsService,
    private router: Router,
    protected route: ActivatedRoute,
    private reportService: ReportService
  ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.reportService.getById(param["id"]).subscribe({
            next:(v)=>{
              this.form.setData(v)
            },
            error:(err) =>{
              this.router.navigate([routing.admin.report.manage])
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    )
  }


  onSave() {
    if(!this.form.valid()){
      this.dialogsService.openInfoDialog("Корректно заполните поля")
      return
    }
    this.reportService.update(this.form.getDto()).subscribe({
      error:(err)=>this.dialogsService.openInfoDialog(err),
      complete:()=> {
        this.dialogsService.openInfoDialog("Успешно")
        this.router.navigate([routing.admin.report.manage])
      }
    })
  }
}
