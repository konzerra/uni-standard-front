import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminMainComponent} from "./admin-main/admin-main.component";

const routes: Routes = [
  { path: '', component: AdminMainComponent },
  {
    path: 'standard',
    loadChildren: () => import('./standard/admin-standard.module').then(m => m.AdminStandardModule),
    //canActivate:[AuthGuard], data:{role:'Admin'}
  },
  {
    path: 'report',
    loadChildren: () => import('./report/admin-report.module').then(m => m.AdminReportModule),
    //canActivate:[AuthGuard], data:{role:'Admin'}
  },
  {
    path: 'tip',
    loadChildren: () => import('./tip/admin-tip.module').then(m => m.AdminTipModule),
    //canActivate:[AuthGuard], data:{role:'Admin'}
  },
  { path: '**', redirectTo: '', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
