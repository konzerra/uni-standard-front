import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUserRoutingModule } from './admin.user-routing.module';
import {UserManageComponent} from "./user.manage/user.manage.component";
import {UserSaveComponent} from "./user.save/user.save.component";
import {UserUpdateComponent} from "./user.update/user.update.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {PipesModule} from "../../_pipes/pipes.module";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CoreModule} from "../../core/core.module";


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
        PipesModule,
        FormsModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
      CoreModule
    ]
})
export class AdminUserModule { }
