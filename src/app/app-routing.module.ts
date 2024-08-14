import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { 
    path: 'dashboard/admin',
    loadChildren: () => import('./features/dashboard/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'dashboard/user',
    loadChildren: () => import('./features/dashboard/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard] 
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
