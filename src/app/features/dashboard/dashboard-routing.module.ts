import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminControlPanelComponent } from './layouts/admin/admin-control-panel/admin-control-panel.component';
import { PaginaListaCursosComponent } from './layouts/admin/pagina-lista-cursos/pagina-lista-cursos.component';
import { PanelDeCursosComponent } from './layouts/admin/panel-de-cursos/panel-de-cursos.component';
import { PanelDeIncripcionesComponent } from './layouts/admin/panel-de-incripciones/panel-de-incripciones.component';
import { StudentsListBaseComponent } from './layouts/admin/students-list-base/students-list-base.component';
import { DasAdmiBaseComponent } from './layouts/base/das-admi-base/das-admi-base.component';
import { DasPageUserComponent } from './layouts/user/das-page-user/das-page-user.component';
import { VerCursosUserComponent } from './layouts/user/ver-cursos-user/ver-cursos-user.component';
import { DashbaseComponent } from './layouts/base/dashbase/dashbase.component';

const routes: Routes = [
  {
    path: '', component: DashbaseComponent, children: [
      { path: 'Estado', component: AdminControlPanelComponent },
      { path: 'ListadeEstudiantes', component: StudentsListBaseComponent },
      { path: 'PaneldeCursos', component: PanelDeCursosComponent },
      { path: 'PaneldeInscripciones', component: PanelDeIncripcionesComponent },
      { path: 'ListadeCursos', component: PaginaListaCursosComponent },
      { path: 'Perfil', component: DasPageUserComponent},
      { path: 'VerCursos', component: VerCursosUserComponent}

    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
