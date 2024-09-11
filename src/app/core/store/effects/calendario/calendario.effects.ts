import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CalendarService } from '../../../services/calendario.service';
import * as CalendarActions from '../../actions/calendario/calendario.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CalendarEvent } from '../../../models/event.interface';

@Injectable()
export class CalendarEffects {
  constructor(
    private actions$: Actions,
    private calendarService: CalendarService
  ) {}

  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CalendarActions.loadEvents),
      mergeMap(() =>
        this.calendarService.getEvents().pipe(
          map(events => CalendarActions.loadEventsSuccess({ events })),
          catchError(error => of(CalendarActions.loadEventsFailure({ error })))
        )
      )
    )
  );

  createEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CalendarActions.createEvent),
      mergeMap(({ event }: { event: CalendarEvent }) =>
        this.calendarService.createEvent(event).pipe(
          map(createdEvent => CalendarActions.createEventSuccess({ event: createdEvent })),
          catchError(error => of(CalendarActions.createEventFailure({ error })))
        )
      )
    )
  );

  updateEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CalendarActions.updateEvent),
      mergeMap(({ event }: { event: CalendarEvent }) =>
        this.calendarService.updateEvent(event).pipe(
          map(updatedEvent => CalendarActions.updateEventSuccess({ event: updatedEvent })),
          catchError(error => of(CalendarActions.updateEventFailure({ error })))
        )
      )
    )
  );
  

  deleteEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CalendarActions.deleteEvent),
      mergeMap(({ eventId }: { eventId: string }) =>
        this.calendarService.deleteEvent(eventId).pipe(
          map(() => CalendarActions.deleteEventSuccess({ eventId })),
          catchError(error => of(CalendarActions.deleteEventFailure({ error })))
        )
      )
    )
  );  
}
