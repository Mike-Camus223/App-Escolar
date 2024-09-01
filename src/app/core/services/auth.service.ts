import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { User } from '../models/UserType.interface';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

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
    return this.httpclient.post<User | null>(`${this.apiUrl}/login`, credentials).pipe(
      tap((user: User | null) => {
        if (user) {
          localStorage.setItem('token', 'your-token-here');
          this.updateAuthUser(user);
        }
      })
    );
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
    return of(token === 'your-token-here'); 
  }
}
