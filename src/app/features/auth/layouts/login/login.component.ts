import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
    private router:Router,
    private authservice:AuthService,
    private sweetalert:SweetalertService,
    private dialog: MatDialog){
      this.loginForm = this.fb.group({
        email: ['',[Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        role: ['Admin', [Validators.required]],
      })
    }


  ngOnInit(): void {
  }

   onSubmit() {
    if (this.loginForm.invalid) {
      this.sweetalert.SendNotify({
        title: 'Error',
        text: 'Erro al Iniciar Sesion',
        icon: 'error',
        confirmButtonText: 'Confirmar',
      })
    }
    else {
      this.authservice.login();
    }
   }

  
}
