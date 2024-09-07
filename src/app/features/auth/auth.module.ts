import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { SharedModule } from '../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../core/store/auth/auth.effects';
import { StoreModule } from '@ngrx/store';
import { authFeature } from '../../core/store/auth/auth.reducer';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature(authFeature),
    EffectsModule.forFeature([AuthEffects])
  ],
})
export class AuthModule { }
