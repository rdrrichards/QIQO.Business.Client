import { AppState } from '.';
import { CounterActionsUnion, CounterActionTypes } from './app.actions';

export const initialState: AppState = {
  empty: ''
};

export function appReducer(state = initialState, action: CounterActionsUnion): AppState {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { ...state };
    default:
      return state;
  }
}
