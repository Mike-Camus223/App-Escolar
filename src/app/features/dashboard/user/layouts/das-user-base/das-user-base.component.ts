import { Component } from '@angular/core';

@Component({
  selector: 'app-das-user-base',
  templateUrl: './das-user-base.component.html',
  styleUrl: './das-user-base.component.scss'
})
export class DasUserBaseComponent {

  MonoLinks = [
    { nombre: 'Dashboard', Icono: 'dashboard', direction: 'Estado', ColorClass: 'ColorIcono'}, ];

  ListaLinks = [
    
    { nombre: 'Clases', Icono: 'book', direction: '', ColorClass: 'Icono3', Sublinks: [
      { nombre: 'Cursos', Icono: 'book', direction: 'Cursos' }
    ]},
  ];

}
