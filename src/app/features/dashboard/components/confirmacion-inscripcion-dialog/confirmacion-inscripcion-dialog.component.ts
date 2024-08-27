import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacion-inscripcion-dialog',
  templateUrl: './confirmacion-inscripcion-dialog.component.html',
  styleUrl: './confirmacion-inscripcion-dialog.component.scss'
})
export class ConfirmacionInscripcionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmacionInscripcionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nombreCurso: string }
  ) { }

  onClose(): void {
    this.dialogRef.close(true);
  }
}
