import { createAction, props } from '@ngrx/store';
import { CalendarEvent } from '../models/event.interface';

export const loadCalendarioEvents = createAction('[Calendario] Load Events');
export const loadCalendarioEventsSuccess = createAction(
  '[Calendario] Load Events Success',
  props<{ events: CalendarEvent[] }>()
);
export const loadCalendarioEventsFailure = createAction(
  '[Calendario] Load Events Failure',
  props<{ error: any }>()
);

export const addEvent = createAction(
  '[Calendario] Add Event',
  props<{ event: CalendarEvent }>()
);
export const addEventSuccess = createAction(
  '[Calendario] Add Event Success',
  props<{ event: CalendarEvent }>()
);
export const addEventFailure = createAction(
  '[Calendario] Add Event Failure',
  props<{ error: any }>()
);

export const deleteEvent = createAction(
  '[Calendario] Delete Event',
  props<{ id: string }>() 
);
export const deleteEventSuccess = createAction(
  '[Calendario] Delete Event Success',
  props<{ id: string }>() 
);
export const deleteEventFailure = createAction(
  '[Calendario] Delete Event Failure',
  props<{ error: any }>()
);

export const updateEvent = createAction(
  '[Calendario] Update Event',
  props<{ event: CalendarEvent }>()
);
