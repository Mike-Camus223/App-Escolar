import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddStudentDialogComponent } from '../../components/add-student-dialog/add-student-dialog.component';

export interface Student {
  id: number;
  foto: string;
  nombre: string;
  apellido: string;
  fecha: Date;
}

@Component({
  selector: 'app-students-list-base',
  templateUrl: './students-list-base.component.html',
  styleUrls: ['./students-list-base.component.scss']
})
export class StudentsListBaseComponent {
  displayedColumns: string[] = ['id', 'foto', 'nombre', 'apellido', 'fecha', 'actions'];
  dataSource = new MatTableDataSource<Student>([
    { id: 1, foto: 'assets/photos/photo1.jpg', nombre: 'Gatito', apellido: 'Naranjoso', fecha: new Date('2001-05-15') },
    { id: 2, foto: 'assets/photos/photo2.jpg', nombre: 'Gatito', apellido: 'Agresivo', fecha: new Date('2002-08-22') }
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
    this.dataSource.data = [...this.dataSource.data, { ...student, id: this.nextId++ }];
  }

  updateStudent(updatedStudent: Student): void {
    this.dataSource.data = this.dataSource.data.map(student =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
  }

  deleteStudent(id: number): void {
    this.dataSource.data = this.dataSource.data.filter(student => student.id !== id);
  }

  truncateText(text: string): string {
    return text.length > 10 ? text.substring(0, 10) + '...' : text;
  }

  private getNextId(): number {
    if (this.dataSource.data.length === 0) {
      return 1;
    }
    return Math.max(...this.dataSource.data.map(student => student.id)) + 1;
  }
}