import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminControlPanelComponent } from './layouts/admin/admin-control-panel/admin-control-panel.component';
import { StudentsListBaseComponent } from './layouts/admin/students-list-base/students-list-base.component';
import { PanelDeIncripcionesComponent } from './layouts/admin/panel-de-incripciones/panel-de-incripciones.component';
import { VerCursosUserComponent } from './layouts/user/ver-cursos-user/ver-cursos-user.component';
import { DashbaseComponent } from './layouts/base/dashbase/dashbase.component';
import { adminGuard } from '../../core/guards/admin.guard';
import { PaginaListaCursosComponent } from './layouts/admin/pagina-lista-cursos/pagina-lista-cursos.component';
import { DasPageUserComponent } from './layouts/user/das-page-user/das-page-user.component';

const routes: Routes = [
  {
    path: '', component: DashbaseComponent, children: [
      { path: 'Perfil', component: DasPageUserComponent},
      { path: 'VerCursos', component: VerCursosUserComponent},
      { path: 'Estado', canActivate:[adminGuard], component: AdminControlPanelComponent },
      { path: 'ListadeEstudiantes', canActivate:[adminGuard],  component: StudentsListBaseComponent },
      { path: 'PaneldeInscripciones', canActivate:[adminGuard],  component: PanelDeIncripcionesComponent },
      { path: 'ListadeCursos', canActivate:[adminGuard],  component: PaginaListaCursosComponent },
    ]
  },
  { path: '', redirectTo: '/dashboard/Estado', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
