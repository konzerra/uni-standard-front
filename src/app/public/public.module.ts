import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MainComponent } from './main/main.component';
import {CoreModule} from "../core/core.module";
import {PipesModule} from "../_pipes/pipes.module";
import {ReportDetailsComponent} from "./report.details/report.details.component";
import {HandbookComponent} from "./handbook/handbook.component";


@NgModule({
  declarations: [
    MainComponent,
    ReportDetailsComponent,
    HandbookComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CoreModule,
    PipesModule
  ]
})
export class PublicModule { }
