import { Component, ViewChild, viewChild } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { User } from '../../../../../core/models/UserType.interface';

@Component({
  selector: 'app-dashbase',
  templateUrl: './dashbase.component.html',
  styleUrls: ['./dashbase.component.scss']
})
export class DashbaseComponent {
  title = 'Mi Sidenav';

  @ViewChild('sidenav') sidenav!: MatSidenav;


  MonoLinks = [
    { nombre: 'Dashboard', Icono: 'dashboard', direction: 'Estado', ColorClass: 'ColorIcono' },
    { nombre: 'Perfil', Icono: 'face', direction: 'Perfil', ColorClass: 'ColorIcono' }

  ];

  ListaLinks = [
    {
      nombre: 'Estudiantes', Icono: 'school', direction: '', ColorClass: 'Icono2', Sublinks: [
        { nombre: 'Lista de Alumnos', Icono: 'school', direction: 'ListadeEstudiantes', ColorClass: 'ColorIcono' },
        { nombre: 'Inscripciones', Icono: 'event', direction: 'PaneldeInscripciones', ColorClass: 'ColorIcono' }
      ]
    },
    {
      nombre: 'Clases', Icono: 'book', direction: '', ColorClass: 'Icono3', Sublinks: [
        { nombre: 'Añadir Nuevo Curso', Icono: 'book', direction: 'PaneldeCursos', ColorClass: 'ColorIcono' },
        { nombre: 'Lista de Cursos', Icono: 'book', direction: 'ListadeCursos', ColorClass: 'ColorIcono' }
      ]
    },
    {
      nombre: 'User', Icono: 'book', direction: '', ColorClass: 'Icono3', Sublinks: [
        { nombre: 'Ver Cursos', Icono: 'book', direction: 'VerCursos', ColorClass: 'ColorIcono' }
      ]
    },
  ];


  // authUser$: Observable<User | null>;

  

  constructor(private authservice: AuthService) {
    // this.authUser$ = this.authservice.au
   }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  cerrarSesion() {
    this.authservice.logout();
  }
}
