import { Component } from '@angular/core';
import {CustomErrorStateMatcher} from "../../../utils/CustomErrorStateMatcher";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {routing} from "../../../routing";
import {TipService} from "../../../domain/tip/tip.service";
import {TipSaveForm} from "./tip.save.form";

@Component({
  selector: 'admin-tip.save',
  templateUrl: './tip.save.component.html',
  styleUrl: './tip.save.component.scss'
})
export class TipSaveComponent {
  saveDisabled: boolean = false;
  form = new TipSaveForm()
  matcher = new CustomErrorStateMatcher();

  constructor(
    private tipService: TipService,
    private dialogsService: DialogsService,
    private router: Router
  ) {
  }

  onSave() {
    this.saveDisabled = true
    if(!this.form.valid()){
      this.dialogsService.openInfoDialog("Форма заполнена некорректно")
      this.saveDisabled = false
      return
    }
    this.tipService.save(this.form.getDto()).subscribe({
      error:(err)=>this.dialogsService.openInfoDialog(err),
      complete:()=> {
        this.saveDisabled = false
        this.dialogsService.openInfoDialog("Успешно сохранено")
        this.router.navigate([routing.admin.tip.manage])
      }
    })
  }

  onCancel() {
    this.router.navigate([routing.admin.tip.manage])
  }
}
