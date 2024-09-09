import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LimitadorLetrasPipe } from './pipes/limitador-letras.pipe';
import { DivisaArgPipe } from './pipes/divisa-arg.pipe';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSortModule} from '@angular/material/sort';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule,
    MatChipsModule,
    NgApexchartsModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatSortModule,
    MatPaginatorModule,
    FullCalendarModule,
  ],
  declarations: [
    LimitadorLetrasPipe,
    DivisaArgPipe,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule,
    MatChipsModule,
    NgApexchartsModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    LimitadorLetrasPipe,
    DivisaArgPipe,
    MatStepperModule,
    MatSortModule,
    MatPaginatorModule,
    FullCalendarModule
    
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class SharedModule {
 
}
