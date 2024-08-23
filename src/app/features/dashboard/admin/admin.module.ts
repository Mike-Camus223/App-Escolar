import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DasAdmiBaseComponent } from './layouts/das-admi-base/das-admi-base.component';
import { PerfilConteoAdmiComponent } from './layouts/perfil-conteo-admi/perfil-conteo-admi.component';
import { CardInfoStatusComponent } from './components/card-info-status/card-info-status.component';
import { StudentsListBaseComponent } from './layouts/students-list-base/students-list-base.component';
import { AddStudentDialogComponent } from './components/add-student-dialog/add-student-dialog.component';
import { AdminControlPanelComponent } from './layouts/admin-control-panel/admin-control-panel.component';
import { PanelDeCursosComponent } from './layouts/panel-de-cursos/panel-de-cursos.component';
import { PanelDeIncripcionesComponent } from './layouts/panel-de-incripciones/panel-de-incripciones.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { PaginaListaCursosComponent } from './layouts/pagina-lista-cursos/pagina-lista-cursos.component';
import { DeleteDialogListaComponent } from './components/delete-dialog-lista/delete-dialog-lista.component';
import { SharedModule } from '../../../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PanelloginadminComponent } from './components/panelloginadmin/panelloginadmin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    DasAdmiBaseComponent,
    PerfilConteoAdmiComponent,
    CardInfoStatusComponent,
    StudentsListBaseComponent,
    AddStudentDialogComponent,
    AdminControlPanelComponent,
    PanelDeCursosComponent,
    PanelDeIncripcionesComponent,
    AlertModalComponent,
    PaginaListaCursosComponent,
    DeleteDialogListaComponent,
    SidebarComponent,
    PanelloginadminComponent,
  ],
  exports: [
    DasAdmiBaseComponent,
    PerfilConteoAdmiComponent,
    CardInfoStatusComponent,
    StudentsListBaseComponent,
    PanelDeCursosComponent,
  ]
})
export class AdminModule { }
