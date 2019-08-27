// import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer
// } from '@ngrx/store';
// import { environment } from '../../environments/environment';
// import * as fromReducer from './app.reducer';
import { User } from '../models/user';

export interface AppState {
  user: User;
}

// export const reducers: ActionReducerMap<AppState> = {
//   appReducer: fromReducer.appReducer
// };

// export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

