import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../core/models/student.interface'; 
import { DashbaseComponent } from '../../layouts/base/dashbase/dashbase.component';

@Component({
  selector: 'app-panelloginadmin',
  templateUrl: './panelloginadmin.component.html',
  styleUrl: './panelloginadmin.component.scss'
})
export class PanelloginadminComponent implements OnInit {

  ngOnInit(): void {
    
  }

  constructor(private dashboard: DashbaseComponent){

  }

  usuarioLoginOn: boolean=false;

  DatosPageUser: Student = {
    id: 1,
    foto: 'assets/photos/photo1.jpg',
    nombre: 'Gatito',
    apellido: 'Naranjoso',
    fecha: new Date('2003-05-15'),
    role: "Admin",
  };

  FlechaArriba: boolean = false;

  flechamovimiento() {
    this.FlechaArriba = !this.FlechaArriba;
  }

  toggleSidenav() {
    this.dashboard.toggleSidenav();
  }
}