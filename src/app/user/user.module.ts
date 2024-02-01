import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {ProfileComponent} from "./profile/profile.component";
import {ReportManageComponent} from "../admin/report/report.manage/report.manage.component";
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    UserRoutingModule
  ]
})
export class UserModule { }
