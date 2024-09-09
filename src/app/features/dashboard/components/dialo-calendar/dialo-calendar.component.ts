import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { updateEvent } from '../../../../core/store/calendario.actions';
import { CalendarEvent } from '../../../../core/models/event.interface'; 

@Component({
  selector: 'app-dialo-calendar',
  templateUrl: './dialo-calendar.component.html',
  styleUrls: ['./dialo-calendar.component.scss']
})
export class DialoCalendarComponent {
  constructor(
    public dialogRef: MatDialogRef<DialoCalendarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { event: CalendarEvent; title: string },
    private store: Store
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirmClick(): void {
    const updatedEvent: CalendarEvent = { ...this.data.event, title: this.data.title };
    this.store.dispatch(updateEvent({ event: updatedEvent }));
    this.dialogRef.close();
  }
}
