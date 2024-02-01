import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MainComponent } from './main/main.component';
import {CoreModule} from "../core/core.module";
import {PipesModule} from "../_pipes/pipes.module";
import {ReportDetailsComponent} from "./report.details/report.details.component";
import {PublicViewService} from "./public.view.service";


@NgModule({
  declarations: [
    MainComponent,
    ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CoreModule,
    PipesModule
  ]
})
export class PublicModule { }
