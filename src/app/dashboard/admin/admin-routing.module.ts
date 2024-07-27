import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasAdmiBaseComponent } from './layouts/das-admi-base/das-admi-base.component';

const routes: Routes = [
  {
    path: '',
    component: DasAdmiBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
