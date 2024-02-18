import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUserRoutingModule } from './admin.user-routing.module';
import {UserManageComponent} from "./user.manage/user.manage.component";
import {UserSaveComponent} from "./user.save/user.save.component";
import {UserUpdateComponent} from "./user.update/user.update.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {PipesModule} from "../../_pipes/pipes.module";


@NgModule({
  declarations: [
    UserManageComponent,
    UserSaveComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminUserRoutingModule,
    MatPaginatorModule,
    PipesModule
  ]
})
export class AdminUserModule { }
