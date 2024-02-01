import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatioPipe} from "./PercentagePipe";



@NgModule({
  declarations: [
    RatioPipe
  ],
  exports: [
    RatioPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
