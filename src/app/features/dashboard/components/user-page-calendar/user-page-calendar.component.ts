import { Component, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { Calendar } from '@fullcalendar/core';
import { DialoCalendarComponent } from '../dialo-calendar/dialo-calendar.component';

@Component({
  selector: 'app-user-page-calendar',
  templateUrl: './user-page-calendar.component.html',
  styleUrls: ['./user-page-calendar.component.scss']
})
export class UserPageCalendarComponent implements AfterViewInit {
  calendar!: Calendar; 
  eventCounter: number = 0; 
  selectedEvent: any; 

  constructor(public dialog: MatDialog) {}

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    locale: esLocale,
    timeZone: 'America/Argentina/Buenos_Aires',
    editable: true,
    droppable: true, 
    events: [], // Aquí podrías cargar eventos desde el store si es necesario
    eventClick: (info) => this.handleEventClick(info),
    eventDrop: (info) => this.handleEventDrop(info)
  };

  ngAfterViewInit() {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      this.calendar = new Calendar(calendarEl, this.calendarOptions);
      this.calendar.render();
    }
  }

  addEvent() {
    if (this.calendar) {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const day = new Date().getDate() < 4 ? 4 : 5; 
      const eventDate = new Date(currentYear, currentMonth, day); 
  
      this.eventCounter++;
      const eventTitle = `Evento ${this.eventCounter}`;
  
      this.calendar.addEvent({
        title: eventTitle,
        start: eventDate,
        editable: true,
      });
    }
  }

  handleEventClick(event: any) {
    console.log('Evento clickeado:', event);
    console.log('Elemento del evento:', event.el); 
    
    if (this.selectedEvent) {
      const previousEl = this.selectedEvent.el;
      if (previousEl) {
        previousEl.classList.remove('selected');
      }
    }
    
    this.selectedEvent = event.event;
    const currentEl = this.selectedEvent.el;
    if (currentEl) {
      currentEl.classList.add('selected');
    }
  }
  

  handleEventDrop(event: any) {
    console.log('Evento arrastrado:', event);
  }

  deleteEvent() {
    if (this.selectedEvent) {
      this.selectedEvent.remove(); 
      this.selectedEvent = null; 
    }
  }

  openEditDialog() {
    if (this.selectedEvent) {
      const dialogRef = this.dialog.open(DialoCalendarComponent, {
        width: '250px',
        data: { title: this.selectedEvent.title }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.selectedEvent.setProp('title', result); 
        }
      });
    }
  }
}
