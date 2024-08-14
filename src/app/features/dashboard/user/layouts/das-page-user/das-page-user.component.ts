import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../../core/models/student.interface';

@Component({
  selector: 'app-das-page-user',
  templateUrl: './das-page-user.component.html',
  styleUrl: './das-page-user.component.scss'
})
export class DasPageUserComponent implements OnInit {

  DatosPageUser: Student = {
    id: 1,
    foto: 'assets/photos/photo1.jpg',
    nombre: 'Gatito',
    apellido: 'Naranjoso',
    fecha: new Date('2003-05-15')
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

  constructor() { 

  }

  ngOnInit(): void {
  }
}


