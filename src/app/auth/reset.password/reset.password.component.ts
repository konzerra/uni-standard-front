import { Component } from '@angular/core';
import {ResetPasswordForm} from "./reset.password.form";
import {AuthService} from "../auth.service";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {AuthRoutes} from "../auth.routes";
import {CustomErrorStateMatcher} from "../../utils/CustomErrorStateMatcher";

@Component({
  selector: 'app-reset.password',
  templateUrl: './reset.password.component.html',
  styleUrl: './reset.password.component.scss'
})
export class ResetPasswordComponent {
  form = new ResetPasswordForm()
  matcher = new CustomErrorStateMatcher();
  constructor(
      private authService:AuthService,
      private dialogsService: DialogsService,
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendPin() {
    if(this.form.email.valid){
      console.log(this.form.email.value)
      this.authService.generatePasswordPin(this.form.email.value || "").subscribe({
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog('pin_sent_to_email')
        }
      })
    }else{
      this.dialogsService.openInfoDialog('enter_email')
    }
  }

  resetPassword(){
    if( this.form.valid()){
      this.authService.resetPassword(this.form.getDto()).subscribe({
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{
          this.dialogsService.openInfoDialog("password_changed_successfully")
          this.router.navigate([AuthRoutes.signin])
        }
      })
    }
  }
}
