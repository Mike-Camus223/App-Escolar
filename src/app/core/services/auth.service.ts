import { Injectable } from '@angular/core';
import { ResolveStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User} from '../models/UserType.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ValidToken = '112312355'

  private authUser = new BehaviorSubject <User | null>   (null);
  AcessAuthUser = this.authUser.asObservable();
  
  constructor(private router: Router) { }

  login() {
    localStorage.setItem('token', this.ValidToken);
    this.authUser.next({
      email: 'example@email.com',
      password: '12345',
      role: 'Admin',
    }),
    this.router.navigate(['dashboard/admin'])
  }


 

  // async login() {
  //   localStorage.setItem('token', 'asdasdasdasdsa');
  //   this.router.navigate(['dashboard/admin'])

  //   await this.ObtenerUsuarioAuth()
  //   .then((usuario)=> {
  //     console.log("login")
  //   })
  //   .catch((err) => {
  //     alert("another god rejected");
  //   })
  //   .finally(()=> {
  //     console.log("end")
  //   });
  // }

  // login() {
  //   this.ObtenerUsuarioObservable().subscribe({
  //     next: (usuario) => {
  //       console.log(usuario)
  //     },
  //     error: (error) => {
  //       console.log("ocurrio algo xd", error),
  //       alert("error");
  //     },
  //     complete: () =>{
  //       alert("secompleto");
  //     },
  //   })
  // }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth','login'])
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    
    return of (this.ValidToken === token)
  }

  ObtenerUsuarioAuth(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject('another gods rejected')
      setTimeout(()=> {
        resolve ({
          name: 'fake taxi',
          email: 'fake@mail.com',
        })
      },2000);
    })
  }

  ObtenerUsuarioObservable(): Observable<any> {
    return new Observable((observer) =>{
      setTimeout(() =>{
        observer.next({
          name: 'fake taxi',
          email: 'fake@mail.com',
        });
        // observer.error('errores uwunt');
        observer.complete();
      },2000);
    });
  }



}

