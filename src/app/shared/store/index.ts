import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';


import { reducer as authReducer } from './Auth/reducers/auth.reducer';
import { AuthState } from '../models/login.models';
import { environment } from 'src/environments/environment';


export interface State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer
};


export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [{
      auth: ['tokenResponse', 'menuName']
    }],
    rehydrate: true
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
