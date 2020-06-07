import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const isLoggedIn = createSelector(
  state => state['auth'],
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggededIn => !loggededIn
);

// It is the memory of executions , it will be called only value will be change. 