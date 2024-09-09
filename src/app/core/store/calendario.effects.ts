import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CalendarService } from '../services/calendario.service';
import { addEvent, addEventSuccess, addEventFailure, loadCalendarioEvents, loadCalendarioEventsSuccess, loadCalendarioEventsFailure, updateEvent } from './calendario.actions';
import { CalendarEvent } from '../models/event.interface';

@Injectable()
export class CalendarioEffects {
  constructor(
    private actions$: Actions,
    private calendarService: CalendarService
  ) {}

  loadCalendarioEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCalendarioEvents),
      mergeMap(() =>
        this.calendarService.getEvents().pipe(
          map((events: CalendarEvent[]) => loadCalendarioEventsSuccess({ events })),
          catchError(error => of(loadCalendarioEventsFailure({ error })))
        )
      )
    )
  );

  addEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEvent),
      mergeMap(action =>
        this.calendarService.addEvent(action.event).pipe(
          map(() => addEventSuccess({ event: action.event })),
          catchError(error => of(addEventFailure({ error })))
        )
      )
    )
  );

  updateEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEvent),
      mergeMap(action =>
        this.calendarService.updateEvent(action.event).pipe(
          map(() => addEventSuccess({ event: action.event })),
          catchError(error => of(addEventFailure({ error })))
        )
      )
    )
  );
}
