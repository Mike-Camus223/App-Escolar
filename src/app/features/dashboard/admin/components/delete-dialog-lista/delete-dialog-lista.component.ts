import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog-lista',
  templateUrl: './delete-dialog-lista.component.html',
  styleUrls: ['./delete-dialog-lista.component.scss']
})
export class DeleteDialogListaComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogListaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
