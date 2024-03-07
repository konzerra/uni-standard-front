import { Component } from '@angular/core';
import {CustomErrorStateMatcher} from "../../../utils/CustomErrorStateMatcher";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {routing} from "../../../routing";
import {UserService} from "../../../domain/user/user.service";
import {UserSaveForm} from "./user.save.form";

@Component({
  selector: 'app-user.save',

  templateUrl: './user.save.component.html',
  styleUrl: './user.save.component.scss'
})
export class UserSaveComponent {

  saveDisabled: boolean = false;
  form = new UserSaveForm()
  matcher = new CustomErrorStateMatcher();

  constructor(
    private userService: UserService,
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
    this.userService.save(this.form.getDto()).subscribe({
      error:(err)=>this.dialogsService.openInfoDialog(err),
      complete:()=> {
        this.saveDisabled = false
        this.dialogsService.openInfoDialog("Успешно сохранено")
        this.router.navigate([routing.admin.user.manage])
      }
    })
  }

  onCancel() {
    this.router.navigate([routing.admin.user.manage])
  }
}
