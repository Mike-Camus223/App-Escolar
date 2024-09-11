import { createSelector } from '@ngrx/store';
import { RootState } from '../../mainStore';  
import { State } from '../../reducers/calendario/calendario.reducer';

export const selectCalendarState = (state: RootState): State => state.calendario;

export const selectAllEvents = createSelector(
  selectCalendarState,
  (state: State) => state.events
);
