import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/UserType.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ValidToken = '112312355';
  private apiUrl = environment.apiUrl;

  private authUser = new BehaviorSubject<User | null>(null);
  AcessAuthUser = this.authUser.asObservable();

  constructor(private httpclient: HttpClient, private router: Router) { }

  login() {
    localStorage.setItem('token', this.ValidToken);
    this.authUser.next({
      nombre: 'example',
      apellido: 'surname',
      contraseña: '12345',
      rol: 'Admin',
      email: 'example@email.com',
    });
    this.router.navigate(['dashboard/admin']);
  }

  register(user: User): Observable<User> {
    // return this.httpclient.post<User>(`${this.apiUrl}/usuarios`, user);
    return this.httpclient.post<User>(`${environment.apiUrl}/usuarios`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return of(this.ValidToken === token);
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
