import { createAction, props } from '@ngrx/store';
import { CalendarEvent } from '../../../models/event.interface';

export const loadEvents = createAction('[Calendar] Load Events');
export const loadEventsSuccess = createAction('[Calendar] Load Events Success', props<{ events: CalendarEvent[] }>());
export const loadEventsFailure = createAction('[Calendar] Load Events Failure', props<{ error: any }>());

export const createEvent = createAction('[Calendar] Create Event', props<{ event: CalendarEvent }>());
export const createEventSuccess = createAction('[Calendar] Create Event Success', props<{ event: CalendarEvent }>());
export const createEventFailure = createAction('[Calendar] Create Event Failure', props<{ error: any }>());

export const addEvent = createAction('[Calendar] Add Event', props<{ event: CalendarEvent }>());
export const addEventSuccess = createAction('[Calendar] Add Event Success', props<{ event: CalendarEvent }>());
export const addEventFailure = createAction('[Calendar] Add Event Failure', props<{ error: any }>());

export const updateEvent = createAction('[Calendar] Update Event', props<{ event: CalendarEvent }>());
export const updateEventSuccess = createAction('[Calendar] Update Event Success', props<{ event: CalendarEvent }>());
export const updateEventFailure = createAction('[Calendar] Update Event Failure', props<{ error: any }>());

export const deleteEvent = createAction('[Calendar] Delete Event', props<{ eventId: string }>());
export const deleteEventSuccess = createAction('[Calendar] Delete Event Success', props<{ eventId: string }>());
export const deleteEventFailure = createAction('[Calendar] Delete Event Failure', props<{ error: any }>());
