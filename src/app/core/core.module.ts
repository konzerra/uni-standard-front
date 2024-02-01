import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxTranslateModule} from "../translate/translate.module";
import {AngularMaterialModule} from "../angular-material/angular-material.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTranslateModule,
      AngularMaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    NgxTranslateModule,
      AngularMaterialModule
  ]
})
export class CoreModule { }
