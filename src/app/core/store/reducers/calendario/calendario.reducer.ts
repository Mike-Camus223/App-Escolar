import { createReducer, on } from '@ngrx/store';
import { addEvent, addEventSuccess, addEventFailure, deleteEvent, deleteEventSuccess, deleteEventFailure, loadCalendarioEvents, loadCalendarioEventsSuccess, loadCalendarioEventsFailure, updateEvent, updateEventSuccess, updateEventFailure } from '../../actions/calendario/calendario.actions';
import { CalendarEvent } from '../../../models/event.interface';

export interface State {
  events: CalendarEvent[];
  error: any;
}

export const initialState: State = {
  events: [],
  error: null
};

export const calendarioReducer = createReducer(
  initialState,
  on(loadCalendarioEventsSuccess, (state, { events 

  }) => ({ ...state, events })),
  on(addEventSuccess, (state, { event }) => ({ 
    ...state, events: [...state.events, event] 
  })),
  on(deleteEventSuccess, (state, { id }) => ({
    ...state,
    events: state.events.filter(event => event.id !== id)
  })),
  on(updateEventSuccess, (state, { event }) => ({
    ...state,
    events: state.events.map(e => e.id === event.id ? event : e)
  }))
);
