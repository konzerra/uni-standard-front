import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminStandardRoutingModule } from './admin-standard-routing.module';
import { AdminStandardMainComponent } from './admin-standard-main/admin-standard-main.component';
import { AdminStandardSaveComponent } from './admin-standard-save/admin-standard-save.component';
import { AdminStandardUpdateComponent } from './admin-standard-update/admin-standard-update.component';


@NgModule({
  declarations: [
    AdminStandardMainComponent,
    AdminStandardSaveComponent,
    AdminStandardUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminStandardRoutingModule
  ]
})
export class AdminStandardModule { }
