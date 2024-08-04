import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasAdmiBaseComponent } from './layouts/das-admi-base/das-admi-base.component';
import { StudentsListBaseComponent } from './layouts/students-list-base/students-list-base.component';
import { AdminControlPanelComponent } from './layouts/admin-control-panel/admin-control-panel.component';
import { PanelDeCursosComponent } from './layouts/panel-de-cursos/panel-de-cursos.component';
import { PanelDeIncripcionesComponent } from './layouts/panel-de-incripciones/panel-de-incripciones.component';
import { PaginaListaCursosComponent } from './layouts/pagina-lista-cursos/pagina-lista-cursos.component';

const routes: Routes = [
  { path: '', component: DasAdmiBaseComponent, children: [
    { path: 'Estado', component: AdminControlPanelComponent },
    { path: 'ListadeEstudiantes', component: StudentsListBaseComponent },
    { path: 'PaneldeCursos', component: PanelDeCursosComponent },
    { path: 'PaneldeInscripciones', component: PanelDeIncripcionesComponent},
    {path: 'ListadeCursos', component: PaginaListaCursosComponent}
  ]},

  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
