import { M } from '@angular/cdk/keycodes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'dashboard', loadChildren:() => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule) },
  { path: '', loadChildren: () => import('./features/public/public.module').then((m) => m.PublicModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
