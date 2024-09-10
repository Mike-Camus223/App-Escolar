import { ActionReducerMap } from '@ngrx/store';
import { calendarioReducer } from '../store/reducers/calendario/calendario.reducer';

export interface RootState {
  calendario: any; 
}

export const rootReducer: ActionReducerMap<RootState> = {
  calendario: calendarioReducer,
};
