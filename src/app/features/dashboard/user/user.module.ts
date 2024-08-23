import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DasUserBaseComponent } from './layouts/das-user-base/das-user-base.component';
import { DetalleCursoDialogComponent } from './components/detalle-curso-dialog/detalle-curso-dialog.component';
import { VerCursosUserComponent } from './layouts/ver-cursos-user/ver-cursos-user.component';
import { ConfirmacionInscripcionDialogComponent } from './components/confirmacion-inscripcion-dialog/confirmacion-inscripcion-dialog.component';
import { ChipsComponent } from './components/chips/chips.component';
import { DasPageUserComponent } from './layouts/das-page-user/das-page-user.component';
import { UserCardDataComponent } from './components/user-card-data/user-card-data.component';
import { ChartdonutComponent } from './components/chartdonut/chartdonut.component';
import { UserperfiltablaComponent } from './components/userperfiltabla/userperfiltabla.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    DasUserBaseComponent,
    VerCursosUserComponent,
    DetalleCursoDialogComponent,
    ConfirmacionInscripcionDialogComponent,
    ChipsComponent,
    DasPageUserComponent,
    UserCardDataComponent,
    ChartdonutComponent,
    UserperfiltablaComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
