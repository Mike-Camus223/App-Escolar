import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
  ]
})
export class FeaturesModule { }
