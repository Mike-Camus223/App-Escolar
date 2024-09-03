import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AddStudentDialogComponent } from './components/add-student-dialog/add-student-dialog.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { CardInfoStatusComponent } from './components/card-info-status/card-info-status.component';
import { ChartdonutComponent } from './components/chartdonut/chartdonut.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ConfirmacionInscripcionDialogComponent } from './components/confirmacion-inscripcion-dialog/confirmacion-inscripcion-dialog.component';
import { DeleteDialogListaComponent } from './components/delete-dialog-lista/delete-dialog-lista.component';
import { DetalleCursoDialogComponent } from './components/detalle-curso-dialog/detalle-curso-dialog.component';
import { PanelloginadminComponent } from './components/panelloginadmin/panelloginadmin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserCardDataComponent } from './components/user-card-data/user-card-data.component';
import { UserperfiltablaComponent } from './components/userperfiltabla/userperfiltabla.component';
import { AdminControlPanelComponent } from './layouts/admin/admin-control-panel/admin-control-panel.component';
import { PaginaListaCursosComponent } from './layouts/admin/pagina-lista-cursos/pagina-lista-cursos.component';
import { PanelDeCursosComponent } from './layouts/admin/panel-de-cursos/panel-de-cursos.component';
import { PanelDeIncripcionesComponent } from './layouts/admin/panel-de-incripciones/panel-de-incripciones.component';
import { PerfilConteoAdmiComponent } from './layouts/admin/perfil-conteo-admi/perfil-conteo-admi.component';
import { StudentsListBaseComponent } from './layouts/admin/students-list-base/students-list-base.component';
import { DasAdmiBaseComponent } from './layouts/base/das-admi-base/das-admi-base.component';
import { DasPageUserComponent } from './layouts/user/das-page-user/das-page-user.component';
import { DasUserBaseComponent } from './layouts/user/das-user-base/das-user-base.component';
import { VerCursosUserComponent } from './layouts/user/ver-cursos-user/ver-cursos-user.component';
import { DashbaseComponent } from './layouts/base/dashbase/dashbase.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
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
    DasUserBaseComponent,
    VerCursosUserComponent,
    DetalleCursoDialogComponent,
    ConfirmacionInscripcionDialogComponent,
    ChipsComponent,
    DasPageUserComponent,
    UserCardDataComponent,
    ChartdonutComponent,
    UserperfiltablaComponent,
    DashbaseComponent,
  ],
  exports: [
    DasAdmiBaseComponent,
    PerfilConteoAdmiComponent,
    CardInfoStatusComponent,
    StudentsListBaseComponent,
    PanelDeCursosComponent,
    DasUserBaseComponent,
    VerCursosUserComponent,
    DetalleCursoDialogComponent,
    ConfirmacionInscripcionDialogComponent,
    ChipsComponent,
    DasPageUserComponent,
    UserCardDataComponent,
    ChartdonutComponent,
    UserperfiltablaComponent,
  ]
})
export class DashboardModule { }
