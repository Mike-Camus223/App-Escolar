import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from '../models/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursos: any[] = [];

  constructor() { }

  saveCurso(curso: any): Observable<any> {
    this.cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
    return of(curso);
  }


  getCursos(): Observable<Curso[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next([
          {
            nombreProfesor: 'braun',
            genero: 'hombre',
            id: '1',
            telefono: 113455889900,
            nombreCurso: 'Programacion Web',
            idCurso: '1',
            fecha: new Date(),
            email: 'mauro@gmail.com',
            tiempo: '13:00 a 11:00',
            precioCurso: 120000,
            tipoCurso: 'Programación',
            salon: 'A',
            Descri: 'un curso de programacion web',
          },
          {
            nombreProfesor: 'Sheena',
            genero: 'mujer',
            id: '2',
            telefono: 14455889900,
            nombreCurso: 'Diseño UX/UI',
            idCurso: '2',
            fecha: new Date(),
            email: 'sheena@mail.com',
            tiempo: '14:00 a 20:00',
            precioCurso: 90000,
            tipoCurso: 'Diseño UX/UI',
            salon: 'b',
            Descri: 'un curso de Diseño UX/UI',
          },
        ]),
        observer.complete();
      }, 1500)
    })
  };
  
  guardarCursos(): Observable<Curso[]> {
    return new Observable<Curso[]>((observer) => {
      setTimeout(() => {
        const storedCursos = localStorage.getItem('cursos');
        if (storedCursos) {
          this.cursos = JSON.parse(storedCursos);
        }
        observer.next(this.cursos);
        observer.complete();
      }, 400);
    });
  }
}
         