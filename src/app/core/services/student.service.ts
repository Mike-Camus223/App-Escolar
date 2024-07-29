import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudents(): Observable<any[]> {
    // Devuelve un Observable con los datos de los estudiantes
    return of([
      { id: 1, nombre: 'Juan', apellido: 'Pérez', cumpleaños: '1990-01-01', carrera: 'Ingeniería' },
      { id: 2, nombre: 'Ana', apellido: 'Gómez', cumpleaños: '1992-05-15', carrera: 'Medicina' },
      // Agrega más datos aquí
    ]);
  }
}
