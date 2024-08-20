import { M } from '@angular/cdk/keycodes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  {path: 'dashboard', canActivate: [adminGuard], loadChildren:() => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule) },
  { path: '', loadChildren: () => import('./features/public/public.module').then((m) => m.PublicModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
