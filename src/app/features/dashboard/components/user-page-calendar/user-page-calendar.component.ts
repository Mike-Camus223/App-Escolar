import { Component, AfterViewInit, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { DialoCalendarComponent } from '../dialo-calendar/dialo-calendar.component';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CalendarEvent } from '../../../../core/models/event.interface';
import * as CalendarActions from '../../../../core/store/actions/calendario/calendario.actions';
import { selectAllEvents } from '../../../../core/store/selectors/calendario/calendario.selectors';
import { RootState } from '../../../../core/store/mainStore';
import { AuthService } from '../../../../core/services/auth.service';
import { CalendarService } from '../../../../core/services/calendario.service';

@Component({
  selector: 'app-user-page-calendar',
  templateUrl: './user-page-calendar.component.html',
  styleUrls: ['./user-page-calendar.component.scss']
})
export class UserPageCalendarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('fullCalendar') fullCalendar!: FullCalendarComponent;
  selectedEvent: CalendarEvent | null = null;
  events$: Observable<CalendarEvent[]> = this.store.pipe(select(selectAllEvents));
  eventsSubscription!: Subscription;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: { left: 'prev,next today', center: 'title', right: 'dayGridMonth,dayGridWeek,dayGridDay' },
    locale: esLocale,
    editable: true,
    events: (fetchInfo, successCallback, failureCallback) => {
      this.events$.subscribe(events => {
        successCallback(events);
      });
    },
    eventClick: (info: EventClickArg) => this.handleEventClick(info),
    eventDrop: (info) => this.handleEventDrop(info)
  };

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private calendarService: CalendarService,
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {
    this.loadEvents();
  }

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

  loadEvents(): void {
    this.store.dispatch(CalendarActions.loadEvents());
  }

  handleEventClick(info: EventClickArg) {
    this.selectedEvent = {
      id: info.event.id,
      title: info.event.title,
      start: info.event.startStr,
      end: info.event.endStr
    };
  }

  handleEventDrop(event: any) {
    const updatedEvent: CalendarEvent = {
      id: event.event.id,
      title: event.event.title,
      start: event.event.startStr,
      end: event.event.endStr
    };
    this.store.dispatch(CalendarActions.updateEvent({ event: updatedEvent }));
  }

  deleteEvent() {
    if (this.selectedEvent) {
      const selectedEventId = this.selectedEvent.id;
      this.store.dispatch(CalendarActions.deleteEvent({ eventId: selectedEventId }));
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
          this.store.dispatch(CalendarActions.updateEvent({ event: updatedEvent }));
        }
      });
    }
  }

  addEvent() {
    const newEvent: CalendarEvent = {
      id: Math.floor(Math.random() * 1000000).toString(),
      title: 'Nuevo Evento',
      start: new Date().toISOString(),
      end: new Date().toISOString()
    };

    this.store.dispatch(CalendarActions.addEvent({ event: newEvent }));
  }
}
