import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReportManageComponent} from "./report.manage/report.manage.component";
import {ReportSaveComponent} from "./report.save/report.save.component";
import {ReportUpdateComponent} from "./report.update/report.update.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: ReportManageComponent },
  { path: 'save', component: ReportSaveComponent },
  { path: 'update', component: ReportUpdateComponent },
  { path: '**',  redirectTo: 'manage', pathMatch: 'prefix'}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminReportRoutingModule { }
