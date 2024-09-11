import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, merge, Observable, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { User } from '../models/UserType.interface';
import { Router } from '@angular/router';
import { tap, map, catchError } from 'rxjs/operators';
import {jwtDecode} from 'jwt-decode';

interface LoginCredentials {
  email: string;
  contraseña: string;
}

interface LoginResponse {
  token: string;
  usuario: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private authUser = new BehaviorSubject<User | null>(null);
  AcessAuthUser = this.authUser.asObservable();

  constructor(private httpclient: HttpClient, private router: Router) { }

  login(credentials: LoginCredentials): Observable<User | null> {
    return this.httpclient.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.updateAuthUser(response.usuario);
        }
      }),
      map(response => response.usuario || null)
    );
  }

  register(user: User): Observable<User> {
    return this.httpclient.post<User>(`${this.apiUrl}/usuarios`, { ...user, rol: 'User' });
  }

  ObtenerUsuarioAutenticado(): Observable<User | null> {
    const token = localStorage.getItem('token');
    
    if (!token) {
      return of(null); 
    }
  
    const currentUser = this.authUser.getValue();
    if (currentUser) {
      return of(currentUser); 
    }
  
    return this.httpclient.get<User>(`${this.apiUrl}/usuarios/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).pipe(
      tap(user => {
        if (user) {
          this.updateAuthUser(user); 
        } else {
          this.logout();
        }
      }),
      map(user => user || null)
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.authUser.next(null); 
    this.router.navigate(['auth', 'login']);
  }

  updateAuthUser(user: User | null) {
    this.authUser.next(user);
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      return of(false);
    }
    try {
      const decoded: any = jwtDecode(token);
      const isExpired = decoded.exp < Date.now() / 1000;
      return of(!isExpired);
    } catch (e) {
      return of(false);
    }
  }
}
