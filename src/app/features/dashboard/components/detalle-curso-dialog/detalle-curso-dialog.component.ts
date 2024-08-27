import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ConfirmacionInscripcionDialogComponent } from '../confirmacion-inscripcion-dialog/confirmacion-inscripcion-dialog.component';

@Component({
  selector: 'app-detalle-curso-dialog',
  templateUrl: './detalle-curso-dialog.component.html',
  styleUrls: ['./detalle-curso-dialog.component.scss']
})
export class DetalleCursoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DetalleCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }

  inscribirse(): void {
    const dialogRef = this.dialog.open(ConfirmacionInscripcionDialogComponent, {
      width: '400px',
      data: { nombreCurso: this.data.nombreCurso }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onClose(); 
      }
    });
  }
}
