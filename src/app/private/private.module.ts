import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import {PrivateDataComponent} from "./private.data/private.data.component";
import {PrivateReportDetailsComponent} from "./private.report.details/private.report.details.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {PipesModule} from "../_pipes/pipes.module";
import {MatButtonModule} from "@angular/material/button";


/*
Module for private data processing
 */
@NgModule({
  declarations: [
    PrivateDataComponent,
    PrivateReportDetailsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    PipesModule,
    MatButtonModule
  ]
})
export class PrivateModule { }
