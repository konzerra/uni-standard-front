import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    //canActivate:[AuthGuard], data:{role:'Admin'}
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    //canActivate:[AuthGuard], data:{role:'Admin'}
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
  },
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
  },

  { path: '**', redirectTo: '/', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
