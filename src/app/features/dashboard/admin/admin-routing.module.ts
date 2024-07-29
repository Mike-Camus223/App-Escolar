import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasAdmiBaseComponent } from './layouts/das-admi-base/das-admi-base.component';
import { StudentsListBaseComponent } from './layouts/students-list-base/students-list-base.component';

const routes: Routes = [
  { path: '', component: DasAdmiBaseComponent, children: [
    { path: 'Estudiantes', component: StudentsListBaseComponent },
    
  ]},
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
