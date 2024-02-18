import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TipManageComponent} from "../tip/tip.manage/tip.manage.component";
import {TipSaveComponent} from "../tip/tip.save/tip.save.component";
import {TipUpdateComponent} from "../tip/tip.update/tip.update.component";
import {UserManageComponent} from "./user.manage/user.manage.component";
import {UserSaveComponent} from "./user.save/user.save.component";
import {UserUpdateComponent} from "./user.update/user.update.component";

const routes: Routes = [
  { path: '', redirectTo: 'manage', pathMatch: 'full' },
  { path: 'manage', component: UserManageComponent },
  { path: 'save', component: UserSaveComponent },
  { path: 'update', component: UserUpdateComponent },
  { path: '**',  redirectTo: 'manage', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUserRoutingModule { }
