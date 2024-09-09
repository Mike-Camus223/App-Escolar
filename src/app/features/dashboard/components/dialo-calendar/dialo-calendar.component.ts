import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialo-calendar',
  templateUrl: './dialo-calendar.component.html',
  styleUrls: ['./dialo-calendar.component.scss']
})
export class DialoCalendarComponent {
  constructor(
    public dialogRef: MatDialogRef<DialoCalendarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    this.dialogRef.close(this.data.title);
  }
}
