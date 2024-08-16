import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'admin', loadChildren:() => import('../dashboard/admin/admin.module').then((m) => m.AdminModule) },
  {path: 'user', loadChildren:() => import('../dashboard/user/user.module').then((m) => m.UserModule) },
  {path: '**', redirectTo: 'admin'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
