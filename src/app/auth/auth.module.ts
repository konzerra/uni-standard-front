import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {SignInComponent} from "./sign.in/sign.in.component";
import {SignUpComponent} from "./sign.up/sign.up.component";
import {ResetPasswordComponent} from "./reset.password/reset.password.component";
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
      SignInComponent,
      SignUpComponent,
      ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
      CoreModule,
      SharedModule
  ]
})
export class AuthModule { }
