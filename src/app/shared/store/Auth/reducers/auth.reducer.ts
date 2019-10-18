import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { AuthState, initialState } from 'src/app/shared/models/login.models';

export function reducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.AuthLogin:
      return {
        loading: true,
        ...state
      };

    case AuthActionTypes.AuthTokenSuccess:
      return {
        ...state,
        loading: false,
        tokenResponse: {
          ...state.tokenResponse,
          ...(action.payload ? action.payload : state.tokenResponse)
        }
      };

    case AuthActionTypes.AuthLoginSuccess:
      return {
        ...state,
        loading: false,
        userResponse: {
          ...action.payload
        }
      };

    case AuthActionTypes.AuthLogout:
      return initialState;

    default:
      return state;
  }
}
