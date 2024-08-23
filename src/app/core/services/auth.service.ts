import { Injectable } from '@angular/core';
import { ResolveStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DasAdmiBaseComponent } from '../../features/dashboard/admin/layouts/das-admi-base/das-admi-base.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login() {
    localStorage.setItem('token', 'asdasdasdasdsa');
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

  ObtenerToken( ){

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
        // observer.error('no more gods');
        observer.complete();
      },2000);
    });
  }



}

