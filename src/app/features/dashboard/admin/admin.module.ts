import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DasAdmiBaseComponent } from './layouts/das-admi-base/das-admi-base.component';
import { PerfilConteoAdmiComponent } from './layouts/perfil-conteo-admi/perfil-conteo-admi.component';
import { CardInfoStatusComponent } from './components/card-info-status/card-info-status.component';
import { StudentsListBaseComponent } from './layouts/students-list-base/students-list-base.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddStudentDialogComponent } from './components/add-student-dialog/add-student-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
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
    MatNativeDateModule
  ],
  declarations: [
    DasAdmiBaseComponent,
    PerfilConteoAdmiComponent,
    CardInfoStatusComponent,
    StudentsListBaseComponent,
    AddStudentDialogComponent
  ],
  exports: [
    DasAdmiBaseComponent,
    PerfilConteoAdmiComponent,
    CardInfoStatusComponent,
    StudentsListBaseComponent
  ]
})
export class AdminModule {

 }
