import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DasUserBaseComponent } from './layouts/das-user-base/das-user-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionPanel, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNavList, MatListModule } from '@angular/material/list';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminModule } from '../admin/admin.module';
import { SharedModule } from '../../../shared/shared.module';
import { DetalleCursoDialogComponent } from './components/detalle-curso-dialog/detalle-curso-dialog.component';
import { VerCursosUserComponent } from './layouts/ver-cursos-user/ver-cursos-user.component';
import { ConfirmacionInscripcionDialogComponent } from './components/confirmacion-inscripcion-dialog/confirmacion-inscripcion-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsComponent } from './components/chips/chips.component';
import { DivisaArgPipe } from '../../../shared/pipes/divisa-arg.pipe';


@NgModule({
  declarations: [
    DasUserBaseComponent,
    VerCursosUserComponent,
    DetalleCursoDialogComponent,
    ConfirmacionInscripcionDialogComponent,
    ChipsComponent,
    DivisaArgPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDrawer,
    MatNavList,
    MatExpansionPanel,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuTrigger,
    MatChipsModule,
    AdminModule,
  ]
})
export class UserModule { }
