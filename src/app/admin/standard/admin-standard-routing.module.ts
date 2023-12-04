import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StandardManageComponent} from "./standard.manage/standard.manage.component";
import {StandardSaveComponent} from "./standard.save/standard.save.component";
import {StandardUpdateComponent} from "./standard.update/standard.update.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: StandardManageComponent },
  { path: 'save', component: StandardSaveComponent },
  { path: 'update', component: StandardUpdateComponent },
  { path: '**',  redirectTo: 'manage', pathMatch: 'prefix'}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminStandardRoutingModule { }
