import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { DialoCalendarComponent } from '../dialo-calendar/dialo-calendar.component';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CalendarEvent } from '../../../../core/models/event.interface';
import { selectAllEvents } from '../../../../core/store/selectors/calendario/calendario.selectors';
import { updateEvent } from '../../../../core/store/actions/calendario/calendario.actions';

@Component({
  selector: 'app-user-page-calendar',
  templateUrl: './user-page-calendar.component.html',
  styleUrls: ['./user-page-calendar.component.scss']
})
export class UserPageCalendarComponent implements AfterViewInit, OnDestroy {
  calendar!: Calendar;
  eventCounter: number = 0;
  selectedEvent: any;
  events$: Observable<CalendarEvent[]>;
  eventsSubscription!: Subscription;

  constructor(public dialog: MatDialog, private store: Store) {
    this.events$ = this.store.pipe(select(selectAllEvents));
  }

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
    events: [], // Inicialmente vacío, se llenará después
    eventClick: (info) => this.handleEventClick(info),
    eventDrop: (info) => this.handleEventDrop(info)
  };

  ngAfterViewInit() {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      this.eventsSubscription = this.events$.subscribe(events => {
        console.log('Eventos recibidos desde la tienda:', events);
  
        if (this.calendar) {
          this.calendar.removeAllEvents();
          this.calendar.addEventSource(events.map(event => ({
            id: event.id,
            title: event.title,
            start: event.start,
            end: event.end
          })));
        } else {
          this.calendar = new Calendar(calendarEl, {
            ...this.calendarOptions,
            events: events.map(event => ({
              id: event.id,
              title: event.title,
              start: event.start,
              end: event.end
            }))
          });
          this.calendar.render();
        }
      });
    }
  }
  

  ngOnDestroy() {
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
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
    // Implementa lo que necesitas hacer cuando un evento se mueve
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
        data: { event: { ...this.selectedEvent.extendedProps }, title: this.selectedEvent.title }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const updatedEvent: CalendarEvent = {
            id: this.selectedEvent.id,
            title: result,
            start: this.selectedEvent.startStr,
            end: this.selectedEvent.endStr
          };
          this.store.dispatch(updateEvent({ event: updatedEvent }));
        }
      });
    }
  }
}
