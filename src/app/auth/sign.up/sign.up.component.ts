import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {AuthService} from "../auth.service";
import {SignUpForm} from "./sign-up.form";
import {AuthSignupDto} from "../../domain/user/_models/auth.signup.dto";
import {AuthRoutes} from "../auth.routes";
import {FormControl} from "@angular/forms";
import {genericCheckFormControl} from "../../utils/genericCheckFormControl";

@Component({
  selector: 'app-sign.up',
  templateUrl: './sign.up.component.html',
  styleUrl: './sign.up.component.scss'
})
export class SignUpComponent implements OnInit {

  constructor(
      private router:Router,
      private route: ActivatedRoute,
      private dialogsService: DialogsService,
      private authService: AuthService
  ) { }
  public infoParam : string = ''
  public errorParam: string = ''
  public form = new SignUpForm()

  public signupDisabled= false
  ngOnInit(): void {

  }

  onSubmit() {
    this.signupDisabled = true
    if(this.form.group.valid){
      let userRegisterDto:AuthSignupDto = {
        name : this.form.name.value,
        email : this.form.email.value,
        password : this.form.password.value || ""
      }
      this.authService.signup(userRegisterDto).subscribe({
        error:(err)=>{
          this.dialogsService.openInfoDialog(err)
        },
        complete:()=>{
          this.signupDisabled = false
          this.router.navigate(
              [AuthRoutes.signin],
              { queryParams: { info: "registered" } })

        }
      })
    }else{
      this.dialogsService.openInfoDialog('enter_all_correctly')
      this.signupDisabled = false
    }

  }
  checkFormControl(modelName: FormControl):boolean {
    return genericCheckFormControl(modelName)
  }
}
