import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './calendario.reducer';

export const selectCalendarioState = createFeatureSelector<State>('calendario');

export const selectAllEvents = createSelector(
  selectCalendarioState,
  (state: State) => state.events
);
