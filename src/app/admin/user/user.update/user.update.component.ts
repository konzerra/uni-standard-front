import {Component, OnInit} from '@angular/core';
import {UserSaveForm} from "../user.save/user.save.form";
import {CustomErrorStateMatcher} from "../../../utils/CustomErrorStateMatcher";
import {UserService} from "../../../domain/user/user.service";
import {DialogsService} from "../../../shared/dialogs/dialogs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {routing} from "../../../routing";
import {FormControl} from "@angular/forms";
import {UserUpdateForm} from "./user.update.form";


@Component({
  selector: 'app-user.update',
  templateUrl: './user.update.component.html',
  styleUrl: './user.update.component.scss'
})
export class UserUpdateComponent implements OnInit{
  updateDisabled: boolean = false;
  form = new UserUpdateForm()
  matcher = new CustomErrorStateMatcher();
  constructor(
    private userService: UserService,
    private dialogsService: DialogsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe({
        next:(param) =>{
          this.userService.getById(param["id"]).subscribe({
            next:(v)=>{
              this.form.setDto(v)
            },
            error:(err) =>{
              this.router.navigate([routing.admin.user.manage])
              this.dialogsService.openInfoDialog(err)
            }
          })
        }
      }
    )
  }

  onUpdate() {
    this.updateDisabled = true
    if(!this.form.valid()){
      this.dialogsService.openInfoDialog("Форма заполнена некорректно")
      this.updateDisabled = false
      return
    }
    this.userService.update(this.form.getDto()).subscribe({
      error:(err)=>this.dialogsService.openInfoDialog(err),
      complete:()=> {
        this.updateDisabled = false
        this.dialogsService.openInfoDialog("Успешно сохранено")
        this.router.navigate([routing.admin.user.manage])
      }
    })
  }

  onCancel() {
    this.router.navigate([routing.admin.user.manage])
  }


}
