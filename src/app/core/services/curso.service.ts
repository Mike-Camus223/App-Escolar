import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursos: Curso[] = [];

  constructor(private httpclient: HttpClient) { }

  saveCurso(curso: Curso): Observable<Curso> {
    return this.httpclient.post<Curso>(`${environment.apiUrl}/cursos`, curso);
  }

  guardarCursos(): Observable<Curso[]> {
    return this.httpclient.get<Curso[]>(`${environment.apiUrl}/cursos`);
  }

  updateCurso(idCurso: string, cursoData: Curso) {
    return this.httpclient.put<void>(`${environment.apiUrl}/cursos/${idCurso}`, cursoData);
  }
}
