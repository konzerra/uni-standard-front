import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { MainComponent } from './main/main.component';
import {CoreModule} from "../core/core.module";
import {PipesModule} from "../_pipes/pipes.module";
import {ReportDetailsComponent} from "./report.details/report.details.component";
import {HandbookComponent} from "./handbook/handbook.component";
import {HomeComponent} from "./home/home.component";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    MainComponent,
    ReportDetailsComponent,
    HandbookComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CoreModule,
    PipesModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicModule { }
