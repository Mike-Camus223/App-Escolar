import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent {
  studentForm: FormGroup;
  isEdit: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      nombre: [data ? data.nombre : '', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      apellido: [data ? data.apellido : '', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      foto: [{ value: data ? data.foto : 'assets/photos/user.jpg', disabled: false }],
      fecha: [data ? data.fecha : '', Validators.required]
    });

    if (data) {
      this.isEdit = true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.studentForm.valid) {

      const studentData = { ...this.studentForm.value };
      if (this.isEdit && this.data) {
        studentData.id = this.data.id; 
      }
      this.dialogRef.close(studentData);
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

  getError(controlName: string): string {
    const control = this.studentForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (control?.hasError('pattern')) {
      return 'El campo debe contener solo letras y espacios';
    }
    return '';
  }
}
