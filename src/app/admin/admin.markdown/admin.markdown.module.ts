import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMarkdownRoutingModule } from './admin.markdown-routing.module';
import {MarkdownManageComponent} from "./markdown.manage/markdown.manage.component";
import {MarkdownSaveComponent} from "./markdown.save/markdown.save.component";
import {MarkdownUpdateComponent} from "./markdown.update/markdown.update.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularMaterialModule} from "../../angular-material/angular-material.module";
import {MarkdownComponent} from "ngx-markdown";


@NgModule({
  declarations: [
    MarkdownManageComponent,
    MarkdownSaveComponent,
    MarkdownUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminMarkdownRoutingModule,
    MatPaginatorModule,
    TranslateModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MarkdownComponent
  ]
})
export class AdminMarkdownModule { }
