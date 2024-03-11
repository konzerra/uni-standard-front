import {Component, OnInit} from '@angular/core';

import {ProfileForm} from "./profile.form";
import {User} from "../../domain/user/User";
import {AuthService} from "../../auth/auth.service";
import {UserUseCaseUpdate} from "../../domain/user/usecase/UserUseCaseUpdate";
import {DialogsService} from "../../shared/dialogs/dialogs.service";
import {Router} from "@angular/router";
import {genericCheckFormControl} from "../../utils/genericCheckFormControl";
import {FormControl} from "@angular/forms";
import {UserSelfUpdateDto} from "./_models/UserUpdateDto";
import {routing} from "../../routing";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  form = new ProfileForm()
  user : User | null = null
  constructor(
    private userAuthService: AuthService,
    private userUseCaseUpdate: UserUseCaseUpdate,
    private dialogsService: DialogsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.userAuthService.getUser()
    if(this.user!=null){
      this.form.name.setValue(this.user.name)
    }
  }


  onSubmit() {

  }

  checkFormControl(control: FormControl) {
    return genericCheckFormControl(control)
  }

  onProfileUpdate() {
    let user = this.userAuthService.getUser()
    if(user!=null && user.name != this.form.name.value){
      let updateDto:UserSelfUpdateDto = {
        id:user.id,
        name: user.name
      }
      this.userUseCaseUpdate.execute(updateDto).subscribe({
        complete:()=>{
          this.dialogsService.openInfoDialog('updated')
        }
      })
    }

  }

  onLogout() {
    this.userAuthService.logout()
    this.router.navigate([routing.public.home])
  }

  protected readonly UserRoutes = routing.user;
}
