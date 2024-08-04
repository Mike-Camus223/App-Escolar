import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-das-admi-base',
  templateUrl: './das-admi-base.component.html',
  styleUrl: './das-admi-base.component.scss'  
})
export class DasAdmiBaseComponent {
  MonoLinks = [
    { nombre: 'Dashboard', Icono: 'dashboard', direction: 'Estado', ColorClass: 'ColorIcono'}, ];

  ListaLinks = [
    { nombre: 'Estudiantes', Icono: 'school', direction: '', ColorClass: 'Icono2', Sublinks: [
      { nombre: 'Lista de Alumnos', Icono: 'school', direction: 'ListadeEstudiantes' },
      { nombre: 'Inscripciones', Icono: 'event', direction: 'PaneldeInscripciones' }
    ]},

    { nombre: 'Clases', Icono: 'book', direction: '', ColorClass: 'Icono3', Sublinks: [
      { nombre: 'Añadir Nuevo Curso', Icono: 'book', direction: 'PaneldeCursos' },
      { nombre: 'Lista de Cursos', Icono: 'book', direction: 'ListadeCursos' }
    ]},
  ];
}
