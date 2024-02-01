import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StandardSaveForm} from "./standard.save.form";
import {CustomErrorStateMatcher} from "../../../utils/CustomErrorStateMatcher";
import {StandardService} from "../../../domain/standard/standard.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {routing} from "../../../routing";

@Component({
  selector: 'app-standard.save',
  templateUrl: './standard.save.component.html',
  styleUrl: './standard.save.component.scss'
})
export class StandardSaveComponent {
  saveDisabled: boolean = false;
  form = new StandardSaveForm()
  matcher = new CustomErrorStateMatcher();

  constructor(
    private standardService: StandardService,
    private dialogsService: DialogsService,
    private router: Router
  ) {
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

  onSave() {
    this.saveDisabled = true
    if(!this.form.valid()){
      this.dialogsService.openInfoDialog("Форма заполнена некорректно")
      this.saveDisabled = false
      return
    }
    console.log(this.form.getDto())
    this.standardService.save(this.form.getDto()).subscribe({
        error:(err)=>this.dialogsService.openInfoDialog(err),
        complete:()=> {
          this.saveDisabled = false
          this.dialogsService.openInfoDialog("Успешно сохранено")
          this.router.navigate([routing.admin.standard.manage])
        }
    })
  }

  onCancel() {
    this.router.navigate([routing.admin.standard.manage])
  }
}
