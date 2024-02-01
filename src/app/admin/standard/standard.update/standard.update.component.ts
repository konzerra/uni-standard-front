import {Component, OnInit} from '@angular/core';
import {StandardSaveForm} from "../standard.save/standard.save.form";
import {CustomErrorStateMatcher} from "../../../utils/CustomErrorStateMatcher";
import {StandardService} from "../../../domain/standard/standard.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {routing} from "../../../routing";
import {StandardUpdateForm} from "./standard.update.form";
import {Report} from "../../../domain/report/Report";

@Component({
  selector: 'app-standard.update',
  templateUrl: './standard.update.component.html',
  styleUrl: './standard.update.component.scss'
})
export class StandardUpdateComponent implements OnInit{
  updateDisabled: boolean = false;
  form = new StandardUpdateForm()
  matcher = new CustomErrorStateMatcher();
  reports: Report[] = [
  ]
  constructor(
    private standardService: StandardService,
    private dialogsService: DialogsService,
    private router: Router,
    protected route: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.standardService.getById(param["id"]).subscribe({
            next:(v)=>{
              this.form.setDto(v)
            },
            error:(err) =>{
              this.router.navigate([routing.admin.standard.manage])
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    )
  }

  onCriteriaGroupAdd() {
    this.form.addCriteriaGroup()
  }
  onCriteriaGroupRemove(index: number){
    this.form.removeCriteriaGroup(index)
  }

  onCriterionAdd(cgIndex: number) {
    this.form.addCriterion(cgIndex)
  }
  onCriterionRemove(cgIndex: number, cIndex: number){
    this.form.removeCriterion(cgIndex, cIndex)
  }

  onUpdate() {
    this.updateDisabled = true
    if(!this.form.valid()){
      this.dialogsService.openInfoDialog("Форма заполнена некорректно")
      this.updateDisabled = false
      return
    }
    this.standardService.update(this.form.getDto()).subscribe({
      error:(err)=>this.dialogsService.openInfoDialog(err),
      complete:()=> {
        this.updateDisabled = false
        this.dialogsService.openInfoDialog("Успешно сохранено")
        this.router.navigate([routing.admin.standard.manage])
      }
    })
  }

  onCancel() {
    this.router.navigate([routing.admin.standard.manage])
  }
}
