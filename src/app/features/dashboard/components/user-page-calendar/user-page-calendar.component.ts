import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { DialoCalendarComponent } from '../dialo-calendar/dialo-calendar.component';
import { Store, select } from '@ngrx/store';
import { Observable, of, Subscription, switchMap, catchError, throwError } from 'rxjs';
import { CalendarEvent } from '../../../../core/models/event.interface';
import { selectAllEvents } from '../../../../core/store/selectors/calendario/calendario.selectors';
import { addEvent, updateEvent, deleteEvent } from '../../../../core/store/actions/calendario/calendario.actions';
import { State } from '../../../../core/store/reducers/calendario/calendario.reducer';
import { EventClickArg } from '@fullcalendar/core';
import { AuthService } from '../../../../core/services/auth.service';
import { CalendarService } from '../../../../core/services/calendario.service'; 

@Component({
  selector: 'app-user-page-calendar',
  templateUrl: './user-page-calendar.component.html',
  styleUrls: ['./user-page-calendar.component.scss']
})
export class UserPageCalendarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('fullCalendar') fullCalendar!: FullCalendarComponent;
  selectedEvent: CalendarEvent | null = null;
  events$: Observable<CalendarEvent[]>;
  eventsSubscription!: Subscription;

  events: any[] = [];

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private calendarService: CalendarService,
    private store: Store<{ calendario: State }>
  ) {
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
    editable: true,
    events: [],
    eventClick: (info: EventClickArg) => this.handleEventClick(info),
    eventDrop: (info) => this.handleEventDrop(info)
  };

  ngAfterViewInit() {
    this.eventsSubscription = this.events$.subscribe(events => {
      if (this.fullCalendar) {
        const calendarApi = this.fullCalendar.getApi();
        calendarApi.removeAllEvents();
        calendarApi.addEventSource(events);
      }
    });
  }

  ngOnDestroy() {
    if (this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
    }
  }

  handleEventClick(info: EventClickArg) {
    this.selectedEvent = {
      id: info.event.id,
      title: info.event.title,
      start: info.event.startStr,
      end: info.event.endStr
    };
    console.log('Event selected:', this.selectedEvent);
  }

  handleEventDrop(event: any) {
    const updatedEvent: CalendarEvent = {
      id: event.event.id,
      title: event.event.title,
      start: event.event.startStr,
      end: event.event.endStr
    };
    this.store.dispatch(updateEvent({ event: updatedEvent }));
  }

  deleteEvent() {
    if (this.selectedEvent) {
      const selectedEventId = this.selectedEvent.id; 
  
      this.calendarService.deleteEvent(selectedEventId).pipe(
        catchError(error => {
          console.error('Error deleting event:', error);
          return throwError(error);
        })
      ).subscribe(() => {
        const calendarApi = this.fullCalendar.getApi();
        calendarApi.getEventById(selectedEventId)?.remove(); 
        this.selectedEvent = null;
      });
    }
  }
  

  openEditDialog() {
    if (this.selectedEvent) {
      const dialogRef = this.dialog.open(DialoCalendarComponent, {
        width: '250px',
        data: { event: { ...this.selectedEvent }, title: this.selectedEvent.title }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const updatedEvent: CalendarEvent = {
            id: this.selectedEvent?.id ?? '', 
            title: result,
            start: this.selectedEvent?.start ?? '', 
            end: this.selectedEvent?.end ?? '' 
          };
          this.store.dispatch(updateEvent({ event: updatedEvent }));
        }
      });
    }
  }

  ngOnInit(): void {
    this.authService.ObtenerUsuarioAutenticado().pipe(
      switchMap(user => {
        if (user) {
          return this.calendarService.getEvents(); 
        } else {
          return of([]); 
        }
      })
    ).subscribe(events => {
      this.events = events;
    });
  }

  addEvent() {
    const newEvent: CalendarEvent = {
      id: Math.floor(Math.random() * 1000000).toString(),
      title: 'Nuevo Evento',
      start: new Date().toISOString(),
      end: new Date().toISOString()
    };

    this.store.dispatch(addEvent({ event: newEvent }));
  }
}
