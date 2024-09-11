import { ActionReducerMap } from '@ngrx/store';
import { calendarReducer, State } from '../store/reducers/calendario/calendario.reducer';

export interface RootState {
  calendario: State; 
}

export const rootReducer: ActionReducerMap<RootState> = {
  calendario: calendarReducer,
};
