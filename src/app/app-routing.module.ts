import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard/admin', loadChildren: () => import('./features/dashboard/admin/admin.module').then(m => m.AdminModule) },
  { path: 'dashboard/user', loadChildren: () => import('./features/dashboard/user/user.module').then(m => m.UserModule) },
  { path: 'dashboard', redirectTo: 'dashboard/admin', pathMatch: 'full' }, 
  { path: '', loadChildren: () => import('./features/public/public.module').then(m => m.PublicModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
