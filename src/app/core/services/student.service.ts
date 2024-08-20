import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudents(): Observable<any[]> {
    return of([
      { id: 1, nombre: 'Juan', apellido: 'Pérez', cumpleaños: '1990-01-01', carrera: 'Ingeniería' },
      { id: 2, nombre: 'Ana', apellido: 'Gómez', cumpleaños: '1992-05-15', carrera: 'Medicina' },
    ]);
  }
}
