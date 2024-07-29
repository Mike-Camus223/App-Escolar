import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-das-admi-base',
  templateUrl: './das-admi-base.component.html',
  styleUrl: './das-admi-base.component.scss'  
})
export class DasAdmiBaseComponent {

  links = [
    { nombre: 'dashboard', icon: 'dashboard' },
    { nombre: 'Alumnos', icon: 'school' },
    { nombre: 'Cursos', icon: 'book' },
    { nombre: 'Inscripciones', icon: 'event' }
  ];
}
