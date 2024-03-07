import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReportDetailsComponent} from "./report.details/report.details.component";
import {HandbookComponent} from "./handbook/handbook.component";
import {HomeComponent} from "./home/home.component";
import {MarkdownComponent} from "./markdown/markdown.component";
import {OpenDataComponent} from "./open.data/open.data.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'open-data', component: OpenDataComponent},
  { path: 'report', component: ReportDetailsComponent },
  { path: 'handbook', component: HandbookComponent },
  { path: 'markdown', component: MarkdownComponent },
  { path: '**', redirectTo: '', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
