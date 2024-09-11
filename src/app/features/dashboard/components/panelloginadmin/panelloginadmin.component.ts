import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models/UserType.interface';
import { Subscription } from 'rxjs';
import { DashbaseComponent } from '../../layouts/base/dashbase/dashbase.component';
import { photoIcon } from '../../../../core/models/student.interface';

@Component({
  selector: 'app-panelloginadmin',
  templateUrl: './panelloginadmin.component.html',
  styleUrls: ['./panelloginadmin.component.scss']
})
export class PanelloginadminComponent implements OnInit, OnDestroy {
  usuarioLoginOn: boolean = false;
  DatosPageUser: User | null = null;
  FlechaArriba: boolean = false;


  Perfilphoto: photoIcon | null = {
    photo:'assets/photos/user.jpg'
  };

  private authSubscription: Subscription = new Subscription();

  constructor(private authService: AuthService,
  ) { }

 ngOnInit(): void {
    this.authSubscription = this.authService.AcessAuthUser.subscribe(user => {
      this.DatosPageUser = user;
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  flechamovimiento() {
    this.FlechaArriba = !this.FlechaArriba;
  }

  cerrarSesion() {
    this.authService.logout(); 
  }
}









