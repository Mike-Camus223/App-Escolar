import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CalendarService } from '../../../services/calendario.service';
import * as CalendarActions from '../../actions/calendario/calendario.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

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

  saveEventsAfterChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CalendarActions.addEventSuccess,
        CalendarActions.updateEventSuccess,
        CalendarActions.deleteEventSuccess
      ),
      tap(() => {
        this.calendarService.getEvents().subscribe(events => {
          this.calendarService.saveEvents(events);
        });
      })
    ), { dispatch: false }
  );

  createEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CalendarActions.createEvent),
      mergeMap(({ event }) =>
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
      mergeMap(({ event }) =>
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
      mergeMap(({ eventId }) =>
        this.calendarService.deleteEvent(eventId).pipe(
          map(() => CalendarActions.deleteEventSuccess({ eventId })),
          catchError(error => of(CalendarActions.deleteEventFailure({ error })))
        )
      )
    )
  );
}