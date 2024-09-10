import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../../reducers/calendario/calendario.reducer';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CalendarService } from '../../../services/calendario.service';
import { addEvent, addEventSuccess, addEventFailure, loadCalendarioEvents, loadCalendarioEventsSuccess, loadCalendarioEventsFailure, updateEvent } from '../../actions/calendario/calendario.actions';
import { CalendarEvent } from '../../../models/event.interface';


export const selectCalendarioState = createFeatureSelector<State>('calendario');

export const selectAllEvents = createSelector(
  selectCalendarioState,
  (state: State) => state.events
);
