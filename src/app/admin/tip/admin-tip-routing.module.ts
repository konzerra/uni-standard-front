import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TipManageComponent} from "./tip.manage/tip.manage.component";
import {TipSaveComponent} from "./tip.save/tip.save.component";
import {TipUpdateComponent} from "./tip.update/tip.update.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: TipManageComponent },
  { path: 'save', component: TipSaveComponent },
  { path: 'update', component: TipUpdateComponent },
  { path: '**',  redirectTo: 'manage', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTipRoutingModule { }
