import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule { }
