import { Component, OnInit } from '@angular/core';
import { PerfilAdminModel } from '../../../../../core/models/PerfilAdminModel.interface';

@Component({
  selector: 'app-perfil-conteo-admi',
  templateUrl: './perfil-conteo-admi.component.html',
  styleUrl: './perfil-conteo-admi.component.scss'
})
export class PerfilConteoAdmiComponent implements OnInit {

  AdminWelcome: PerfilAdminModel[] = [
    {
      AdminUser: 'William',
      AdminPhoto: 'images/cat.jpg',
    }
  ]

  Infocards = [
    {
      Icono: 'fa-solid fa-children',
      IconoColor: '#00796B',
      IconoFondo: '#E0F2F1',
      Titulo: 'Estudiantes',
      Numero: 200,
      tamano: '40px'
    },
    {
      Icono: 'fa-solid fa-chalkboard-user',
      IconoColor: '#0288D1',
      IconoFondo: '#E3F2FD',
      Titulo: 'Profesores',
      Numero: 100,
      tamano: '40px'
    },
    {
      Icono: 'fa-solid fa-user-group',
      IconoColor: '#FBC02D',
      IconoFondo: '#FFF9C4',
      Titulo: 'Padres',
      Numero: 400,
      tamano: '40px'
    },
    {
      Icono: 'fa-regular fa-money-bill-1',
      IconoColor: '#C62828',
      IconoFondo: '#FFEBEE',
      Titulo: 'Ganancias',
      Numero: 300,
      tamano: '40px'
    }
  ];

  constructor() { 

  }

  ngOnInit(): void {
  }
}
