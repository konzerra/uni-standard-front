import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxTranslateModule} from "../translate/translate.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTranslateModule,
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    NgxTranslateModule,
  ]
})
export class CoreModule { }
