import { createReducer, on } from '@ngrx/store';
import { CalendarEvent } from '../../../models/event.interface';
import { addEvent, updateEvent, deleteEvent } from '../../actions/calendario/calendario.actions';

export interface State {
  events: CalendarEvent[];
}

export const initialState: State = {
  events: []
};

export const calendarReducer = createReducer(
  initialState,
  on(addEvent, (state, { event }) => {
    console.log('Reducer handling addEvent:', event); 
    return {
      ...state,
      events: [...state.events, event]
    };
  }),
  on(updateEvent, (state, { event }) => ({
    ...state,
    events: state.events.map(e => e.id === event.id ? event : e)
  })),
  on(deleteEvent, (state, { eventId }) => ({
    ...state,
    events: state.events.filter(e => e.id !== eventId)
  }))
);
