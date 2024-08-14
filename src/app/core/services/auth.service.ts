import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private autenticado = false;

  constructor(private http: HttpClient, private router: Router) { }

  iniciarSesion(usuario: string, contrasena: string): Observable<boolean> {
    if (usuario === 'admin' && contrasena === 'admin') {
      this.autenticado = true;
      return of(true);
    }
    return of(false);
  }

  cerrarSesion(): void {
    this.autenticado = false;
    this.router.navigate(['/login']);
  }

  estaLogeado(): boolean {
    return this.autenticado;
  }
}
