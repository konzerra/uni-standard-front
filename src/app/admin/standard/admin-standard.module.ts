import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminStandardRoutingModule } from './admin-standard-routing.module';
import {CoreModule} from "../../core/core.module";
import {StandardManageComponent} from "./standard.manage/standard.manage.component";
import {StandardSaveComponent} from "./standard.save/standard.save.component";
import {StandardUpdateComponent} from "./standard.update/standard.update.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
      StandardManageComponent,
      StandardSaveComponent,
      StandardUpdateComponent
  ],
    imports: [
        CommonModule,
        AdminStandardRoutingModule,
        CoreModule,
        FormsModule
    ]
})
export class AdminStandardModule { }
