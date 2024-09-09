import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { isSubscription, Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from '../../../../../core/services/auth.service';
import { User } from '../../../../../core/models/UserType.interface';
import { photoIcon } from '../../../../../core/models/student.interface';

@Component({
  selector: 'app-das-page-user',
  templateUrl: './das-page-user.component.html',
  styleUrl: './das-page-user.component.scss'
})
export class DasPageUserComponent implements OnInit {

  DatosUsuarioAuth: User | null = null;

  Perfilphoto: photoIcon | null = {
    photo:'assets/photos/user.jpg'
  };

  UserInfoCards = [
    {
      Icono: 'fa-regular fa-message',
      IconoColor: '#8e24aa',
      IconoFondo: '#f3e5f5',
      Titulo: 'Notificaciones',
      Numero: 200,
      tamano: '40px'
    },
    {
      Icono: 'fa-regular fa-calendar-days',
      IconoColor: '#0288D1',
      IconoFondo: '#E3F2FD',
      Titulo: 'Eventos',
      Numero: 100,
      tamano: '40px'
    },
    {
      Icono: 'fa-light fa-percent',
      IconoColor: '#FBC02D',
      IconoFondo: '#FFF9C4',
      Titulo: 'Asistencia',
      Numero: 400,
      tamano: '40px'
    },
  ];

  private authsubscription: Subscription = new Subscription();

  constructor(private auth:AuthService) {
    
  }

  ngOnInit(): void {
    this.authsubscription = this.auth.AcessAuthUser.subscribe(user => {
      this.DatosUsuarioAuth = user;
    });
  }
  ngOnDestroy(): void {
    this.authsubscription.unsubscribe();
  }
 
}


