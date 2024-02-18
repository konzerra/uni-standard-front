import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarkdownManageComponent} from "./markdown.manage/markdown.manage.component";
import {MarkdownSaveComponent} from "./markdown.save/markdown.save.component";
import {MarkdownUpdateComponent} from "./markdown.update/markdown.update.component";


const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: MarkdownManageComponent },
  { path: 'save', component: MarkdownSaveComponent },
  { path: 'update', component: MarkdownUpdateComponent },
  { path: '**',  redirectTo: 'manage', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMarkdownRoutingModule { }
