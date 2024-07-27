import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DasAdmiBaseComponent } from './layouts/das-admi-base/das-admi-base.component';
import { PerfilConteoAdmiComponent } from './layouts/perfil-conteo-admi/perfil-conteo-admi.component';
import { CardInfoStatusComponent } from './components/card-info-status/card-info-status.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    DasAdmiBaseComponent,
    PerfilConteoAdmiComponent,
    CardInfoStatusComponent
  ]
})
export class AdminModule { }
