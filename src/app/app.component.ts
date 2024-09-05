import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'school-app';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.verificarToken().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.authService.ObtenerUsuarioAutenticado().subscribe(user => {
          if (user) {
            console.log('Usuario recuperado:', user); 
            this.authService.updateAuthUser(user);
          } else {
            // Si el usuario no se recupera correctamente, redirigir al login
            this.authService.logout();
          }
        });
      } else {
        // Si el token es inválido o ha expirado, cerrar sesión
        this.authService.logout();
      }
    });
  }
}
