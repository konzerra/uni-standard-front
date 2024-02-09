import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTipRoutingModule } from './admin-tip-routing.module';
import {TipManageComponent} from "./tip.manage/tip.manage.component";
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import {TipSaveComponent} from "./tip.save/tip.save.component";
import {CoreModule} from "../../core/core.module";
import {PipesModule} from "../../_pipes/pipes.module";
import {TipUpdateComponent} from "./tip.update/tip.update.component";


@NgModule({
  declarations: [
    TipManageComponent,
    TipSaveComponent,
    TipUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminTipRoutingModule,
    AngularMaterialModule,
    CoreModule,
    PipesModule
  ]
})
export class AdminTipModule { }
