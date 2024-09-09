import { ActionReducerMap } from '@ngrx/store';
import { calendarioReducer } from './calendario.reducer';

export const rootReducer: ActionReducerMap<any> = {
  calendario: calendarioReducer,
};
