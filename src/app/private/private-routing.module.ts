import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminMainComponent} from "../admin/admin-main/admin-main.component";
import {AuthGuard} from "../_auth/auth.guard";
import {UserRoles} from "../domain/user/UserRoles";
import {PrivateDataComponent} from "./private.data/private.data.component";
import {PrivateReportDetailsComponent} from "./private.report.details/private.report.details.component";

const routes: Routes = [
  { path: 'data', component: PrivateDataComponent,
    canActivate:[AuthGuard], data:{role:UserRoles.DataAccess}
  },
  { path: 'report', component: PrivateReportDetailsComponent,
    canActivate:[AuthGuard], data:{role:UserRoles.DataAccess}
  },
  { path: '**', redirectTo: 'data', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
