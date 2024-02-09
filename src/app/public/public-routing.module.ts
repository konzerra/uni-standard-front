import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ReportDetailsComponent} from "./report.details/report.details.component";
import {HandbookComponent} from "./handbook/handbook.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'report', component: ReportDetailsComponent },
  { path: 'handbook', component: HandbookComponent },
  { path: '**', redirectTo: '', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
