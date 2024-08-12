import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasUserBaseComponent } from './layouts/das-user-base/das-user-base.component';
import { VerCursosUserComponent } from './layouts/ver-cursos-user/ver-cursos-user.component';
import { DasPageUserComponent } from './layouts/das-page-user/das-page-user.component';

const routes: Routes = [
  { path: '', component: DasUserBaseComponent, children: [
    {path: 'Perfil', component: DasPageUserComponent},
    {path: 'Cursos', component: VerCursosUserComponent}
  ]},

  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
