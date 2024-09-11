import { Component, HostListener, ViewChild } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { User } from '../../../../../core/models/UserType.interface';
import { environment } from '../../../../../../environments/environment.prod';

@Component({
  selector: 'app-dashbase',
  templateUrl: './dashbase.component.html',
  styleUrls: ['./dashbase.component.scss']
})
export class DashbaseComponent {
  title = 'Mi Sidenav';

  entornoNombre = environment.envNombre;
  isSidebarCollapsed = false;
  isMobileView = false;
  subLink: any;
  link: any;


  @ViewChild('sidenav') sidenav!: MatSidenav;
  authUser: Observable<User | null>;

  MonoLinks = [
    { nombre: 'Perfil', Icono: 'face', direction: 'Perfil', ColorClass: 'ColorIcono' }
  ];

  ListaLinks = [
    {
      nombre: 'Cursos', Icono: 'book', direction: '', ColorClass: 'Icono3', Sublinks: [
        { nombre: 'Ver Cursos', Icono: 'book', direction: 'VerCursos', ColorClass: 'ColorIcono' },
      ]
    }
  ];

  monolinkadmin = [
    { nombre: 'Dashboard', Icono: 'dashboard', direction: 'Estado', ColorClass: 'ColorIcono' },
  ];

  ListaLinksAdmin = [
    {
      nombre: 'Estudiantes', Icono: 'school', direction: '', ColorClass: 'Icono2', Sublinks: [
        { nombre: 'Lista de Alumnos', Icono: 'school', direction: 'ListadeEstudiantes', ColorClass: 'ColorIcono' },
        { nombre: 'Inscripciones', Icono: 'event', direction: 'PaneldeInscripciones', ColorClass: 'ColorIcono' }
      ]
    },
    {
      nombre: 'Clases', Icono: 'book', direction: '', ColorClass: 'Icono3', Sublinks: [
        { nombre: 'Lista de Cursos', Icono: 'book', direction: 'ListadeCursos', ColorClass: 'ColorIcono' }
      ]
    }
  ];

  constructor(private authservice: AuthService) {
    this.authUser = authservice.AcessAuthUser;
    this.checkViewport();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 768;
    if (this.isMobileView) {
      this.isSidebarCollapsed = true;
    } else {
      this.isSidebarCollapsed = false;
    }
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  cerrarSesion() {
    this.authservice.logout(); 
  }
}
