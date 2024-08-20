import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DasAdmiBaseComponent } from '../../features/dashboard/admin/layouts/das-admi-base/das-admi-base.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login() {
    localStorage.setItem('token', 'asdasdasdasdsa');
    this.router.navigate(['dashboard'])
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth','login'])
  }
}
