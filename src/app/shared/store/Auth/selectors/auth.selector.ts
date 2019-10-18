import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/shared/models/login.models';


export const getAuthState = createFeatureSelector<AuthState>(
  'auth'
);

export const isLoading = createSelector(getAuthState, (state: AuthState) => state.loading);

export const accessToken = createSelector(getAuthState, (state: AuthState) => state.tokenResponse.access_token);

export const userEmail = createSelector(getAuthState, (state: AuthState) => state.userResponse.name);

export const isAuthenticated = createSelector(getAuthState, (state: AuthState) => state.userResponse.authenticated);

export const featureList = createSelector(getAuthState, (state: AuthState) => state.userResponse.principal.featureList);
