import {Component, OnInit} from '@angular/core';
import {ReportSaveForm} from "./report.save.form";
import {StandardService} from "../../../domain/standard/standard.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {routing} from "../../../routing";
import {CustomErrorStateMatcher} from "../../../utils/CustomErrorStateMatcher";
import {UniversitySaveForm} from "./university.save.form";
import {ReportService} from "../../../domain/report/report.service";

@Component({
  selector: 'app-report.save',
  templateUrl: './report.save.component.html',
  styleUrl: './report.save.component.scss'
})
export class ReportSaveComponent implements OnInit{
  form = new ReportSaveForm()
  matcher = new CustomErrorStateMatcher();
  constructor(
    private standardService: StandardService,
    private dialogsService: DialogsService,
    private router: Router,
    protected route: ActivatedRoute,
    private reportService: ReportService
  ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.standardService.getById(param["id"]).subscribe({
            next:(v)=>{
              this.form.setStandard(v)
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
    this.reportService.save(this.form.getDto()).subscribe({
      error:(err)=>this.dialogsService.openInfoDialog(err),
      complete:()=> {
        this.dialogsService.openInfoDialog("Успешно")
        this.router.navigate([routing.admin.report.manage])
      }
    })
  }
}
