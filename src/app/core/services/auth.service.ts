import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/UserType.interface';
import { Router } from '@angular/router';

interface LoginCredentials {
  email: string;
  contraseña: string;
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
    return this.httpclient.post<User | null>(`${this.apiUrl}/login`, credentials);
  }

  register(user: User): Observable<User> {
    return this.httpclient.post<User>(`${this.apiUrl}/usuarios`, { ...user, rol: 'User' });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }

  updateAuthUser(user: User | null) {
    this.authUser.next(user); 
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return of(token === '112312355');
  }

  ObtenerUsuarioAuth(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject('another gods rejected');
      setTimeout(() => {
        resolve({
          name: 'fake user',
          email: 'fake@mail.com',
        });
      }, 2000);
    });
  }

  ObtenerUsuarioObservable(): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next({
          name: 'fake user',
          email: 'fake@mail.com',
        });
        observer.complete();
      }, 2000);
    });
  }
}
