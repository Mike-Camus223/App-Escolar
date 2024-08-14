import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth.service';

@Component({
  selector: 'app-das-user-base',
  templateUrl: './das-user-base.component.html',
  styleUrl: './das-user-base.component.scss'
})
export class DasUserBaseComponent {

  MonoLinks = [
    { nombre: 'Dashboard', Icono: 'dashboard', direction: 'Perfil', ColorClass: 'ColorIcono'}, ];

  ListaLinks = [
    
    { nombre: 'Clases', Icono: 'book', direction: '', ColorClass: 'Icono3', Sublinks: [
      { nombre: 'Cursos', Icono: 'book', direction: 'Cursos' }
    ]},
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

  CerraSesion() {
    this.authService.cerrarSesion();
  }

}
