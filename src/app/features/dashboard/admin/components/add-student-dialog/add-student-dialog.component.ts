import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface StudentDialogData {
  id?: number;
  foto: string;
  nombre: string;
  apellido: string;
  fecha: Date;
}

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent {
  student: StudentDialogData;
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentDialogData
  ) {
    // Si se pasan datos, se utilizan para editar
    if (data && data.id) {
      this.student = { ...data };
      this.isEditMode = true;
    } else {
      this.student = {
        foto: 'assets/photos/photo1.jpg',
        nombre: '',
        apellido: '',
        fecha: new Date()
      };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.student);
  }
}
