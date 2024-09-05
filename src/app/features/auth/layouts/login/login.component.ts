import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { SweetalertService } from '../../../../core/services/sweetalert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  ocultar = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: AuthService,
    private sweetalert: SweetalertService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.invalid) {
      this.sweetalert.SendNotify({
        title: 'Error',
        text: 'Por favor complete todos los campos.',
        icon: 'error',
        confirmButtonText: 'Confirmar',
      });
      return;
    }
  
    const credentials = {
      email: this.loginForm.get('email')?.value,
      contraseña: this.loginForm.get('contraseña')?.value, 
    };
  
    this.authservice.login(credentials).subscribe(
      (user) => {
        if (user) {
          this.authservice.updateAuthUser(user);
          this.router.navigate(['dashboard']);
        } else {
          this.sweetalert.SendNotify({
            title: 'Error',
            text: 'Usuario no registrado.',
            icon: 'error',
            confirmButtonText: 'Confirmar',
          });
        }
      },
      (error) => {
        this.sweetalert.SendNotify({
          title: 'Error',
          text: 'Ocurrió un error al iniciar sesión.',
          icon: 'error',
          confirmButtonText: 'Confirmar',
        });
      }
    );
  }  
}
