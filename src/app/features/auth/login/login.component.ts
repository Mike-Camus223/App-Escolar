import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent implements OnInit {

  usuario = '';
  contrasena = '';

  constructor(private autenticacionService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  iniciarSesion() {
    this.autenticacionService.iniciarSesion(this.usuario, this.contrasena).subscribe(exito => {
      if (exito) {
        this.router.navigate(['/dashboard/user']);
      } else {
        alert('Error al Iniciar Sesión');
      }
    });
  }
}
