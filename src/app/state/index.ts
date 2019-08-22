import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromReducer from './app.reducer';

export interface AppState {
  empty: string;
}

// export const reducers: ActionReducerMap<AppState> = {
//   noidea: fromReducer.appReducer;
// };

// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

