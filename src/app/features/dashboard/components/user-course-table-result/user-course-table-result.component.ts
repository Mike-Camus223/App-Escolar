import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ResultadoExamen } from '../../../../core/models/examenResult.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


const EXAM_DATA: ResultadoExamen[] = [
  { id: 1, nombreExamen: 'Matemáticas', curso: 'Álgebra', aula: '101', nota: 7, fecha: new Date('2024-09-01') },
  { id: 2, nombreExamen: 'Historia', curso: 'Historia Universal', aula: '202', nota: 9, fecha: new Date('2024-09-02') },
  { id: 3, nombreExamen: 'Física', curso: 'Mecánica', aula: '303', nota: 5, fecha: new Date('2024-09-03') },
  { id: 4, nombreExamen: 'Química', curso: 'Orgánica', aula: '404', nota: 8, fecha: new Date('2024-09-04') },
  { id: 5, nombreExamen: 'Inglés', curso: 'Básico', aula: '505', nota: 10, fecha: new Date('2024-09-05') },
  { id: 6, nombreExamen: 'Biología', curso: 'Celular', aula: '606', nota: 6, fecha: new Date('2024-09-06') },
  { id: 7, nombreExamen: 'Geografía', curso: 'Mundial', aula: '707', nota: 7, fecha: new Date('2024-09-07') },
  { id: 8, nombreExamen: 'Literatura', curso: 'Clásica', aula: '808', nota: 9, fecha: new Date('2024-09-08') },
  { id: 9, nombreExamen: 'Arte', curso: 'Renacimiento', aula: '909', nota: 4, fecha: new Date('2024-09-09') },
  { id: 10, nombreExamen: 'Educación Física', curso: 'Deportes', aula: '1010', nota: 6, fecha: new Date('2024-09-10') },
  { id: 11, nombreExamen: 'Informática', curso: 'Programación', aula: '1111', nota: 8, fecha: new Date('2024-09-11') },
  { id: 12, nombreExamen: 'Música', curso: 'Teoría', aula: '1212', nota: 5, fecha: new Date('2024-09-12') },
  { id: 13, nombreExamen: 'Economía', curso: 'Microeconomía', aula: '1313', nota: 7, fecha: new Date('2024-09-13') },
  { id: 14, nombreExamen: 'Psicología', curso: 'Desarrollo Humano', aula: '1414', nota: 9, fecha: new Date('2024-09-14') },
  { id: 15, nombreExamen: 'Filosofía', curso: 'Ética', aula: '1515', nota: 6, fecha: new Date('2024-09-15') },
  { id: 16, nombreExamen: 'Sociología', curso: 'Teoría Sociológica', aula: '1616', nota: 7, fecha: new Date('2024-09-16') },
  { id: 17, nombreExamen: 'Antropología', curso: 'Cultural', aula: '1717', nota: 8, fecha: new Date('2024-09-17') },
  { id: 18, nombreExamen: 'Derecho', curso: 'Constitucional', aula: '1818', nota: 7, fecha: new Date('2024-09-18') },
  { id: 19, nombreExamen: 'Matemáticas', curso: 'Geometría', aula: '1919', nota: 5, fecha: new Date('2024-09-19') },
  { id: 20, nombreExamen: 'Historia', curso: 'Historiografía', aula: '2020', nota: 9, fecha: new Date('2024-09-20') }
];



@Component({
  selector: 'app-user-course-table-result',
  templateUrl: './user-course-table-result.component.html',
  styleUrl: './user-course-table-result.component.scss'
})
export class UserCourseTableResultComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nombreExamen', 'curso', 'aula', 'nota', 'fecha', 'acciones'];
  dataSource = new MatTableDataSource<ResultadoExamen>(EXAM_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
