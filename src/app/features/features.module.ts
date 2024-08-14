import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardModule,
    AuthModule,
  ]
})
export class FeaturesModule { }
