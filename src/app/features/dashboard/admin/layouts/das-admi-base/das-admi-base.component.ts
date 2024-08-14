import { Component, HostListener, ViewChild } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-das-admi-base',
  templateUrl: './das-admi-base.component.html',
  styleUrl: './das-admi-base.component.scss'
})
export class DasAdmiBaseComponent {

  MonoLinks = [
    { nombre: 'Dashboard', Icono: 'dashboard', direction: 'Estado', ColorClass: 'ColorIcono' },];

  ListaLinks = [
    {
      nombre: 'Estudiantes', Icono: 'school', direction: '', ColorClass: 'Icono2', Sublinks: [
        { nombre: 'Lista de Alumnos', Icono: 'school', direction: 'ListadeEstudiantes' },
        { nombre: 'Inscripciones', Icono: 'event', direction: 'PaneldeInscripciones' }
      ]
    },

    {
      nombre: 'Clases', Icono: 'book', direction: '', ColorClass: 'Icono3', Sublinks: [
        { nombre: 'Añadir Nuevo Curso', Icono: 'book', direction: 'PaneldeCursos' },
        { nombre: 'Lista de Cursos', Icono: 'book', direction: 'ListadeCursos' }
      ]
    },
  ];

  isSidebarCollapsed = false;
  isMobileView = false;
  subLink: any;
  link: any;

  constructor(private authService: AuthService) {
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

  CerrarSesion() {
    this.authService.cerrarSesion();
  }
}
