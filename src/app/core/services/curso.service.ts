import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursos: any[] = [];

  constructor() { }

  saveCurso(curso: any): Observable <any> {
    this.cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
    return of (curso);
  }

  getCursos(): Observable <any[]> {
    const storedCursos = localStorage.getItem('cursos');

    if (storedCursos) {
      this.cursos = JSON.parse (storedCursos);
    }

    return of (this.cursos);
  }
}
