import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatioPipe} from "./RatioPipe";
import {TruncatePipe} from "./TruncatePipe";



@NgModule({
  declarations: [
    RatioPipe,
    TruncatePipe
  ],
  exports: [
    RatioPipe,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
