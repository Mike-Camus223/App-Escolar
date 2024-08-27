import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddStudentDialogComponent } from '../../../components/add-student-dialog/add-student-dialog.component'; 
import { Student } from '../../../../../core/models/student.interface';

@Component({
  selector: 'app-students-list-base',
  templateUrl: './students-list-base.component.html',
  styleUrls: ['./students-list-base.component.scss']
})
export class StudentsListBaseComponent {
  
  Columnas: string[] = ['id', 'foto', 'nombre', 'apellido', 'fecha', 'actions'];
  DatosFuente = new MatTableDataSource<Student>([
    { id: 1, foto: 'assets/photos/photo1.jpg', nombre: 'Gatito', apellido: 'Naranjoso', fecha: new Date('2001-05-15'), role:"user" },
    { id: 2, foto: 'assets/photos/photo2.jpg', nombre: 'Gatito', apellido: 'Agresivo', fecha: new Date('2002-08-22'), role:"user" },
    { id: 3, foto: 'assets/photos/photo3.jpg', nombre: 'Gatito', apellido: 'Disociado', fecha: new Date('1991-02-07'), role:"user" },
    { id: 4, foto: 'assets/photos/photo4.jpg', nombre: 'Gatito', apellido: 'De Pana', fecha: new Date('2010-04-15'),  role:"user" },
    { id: 5, foto: 'assets/photos/photo5.jpg', nombre: 'Gatito', apellido: 'Miron', fecha: new Date('2005-04-12'),  role:"user" }
  ]);

  private nextId: number = this.getNextId();

  constructor(public dialog: MatDialog) {}

  openAddStudentDialog(): void {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '500px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addStudent(result);
      }
    });
  }

  openEditStudentDialog(student: Student): void {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '500px',
      height: 'auto',
      data: student
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateStudent(result);
      }
    });
  }

  addStudent(student: Omit<Student, 'id'>): void {
    this.DatosFuente.data = [...this.DatosFuente.data, { ...student, id: this.nextId++ }];
  }

  updateStudent(updatedStudent: Student): void {
    this.DatosFuente.data = this.DatosFuente.data.map(student =>
      student.id === updatedStudent.id ? { ...updatedStudent } : student
    );
  }

  deleteStudent(id: number): void {
    this.DatosFuente.data = this.DatosFuente.data.filter(student => student.id !== id);
  }

  private getNextId(): number {
    if (this.DatosFuente.data.length === 0) {
      return 1;
    }
    return Math.max(...this.DatosFuente.data.map(student => student.id)) + 1;
  }
}
