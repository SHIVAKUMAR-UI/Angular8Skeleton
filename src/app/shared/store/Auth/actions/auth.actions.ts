import { Action } from '@ngrx/store';
import { LoginDetails, TokenResponse } from 'src/app/shared/models/login.models';


export enum AuthActionTypes {
  AuthLogin = '[Auth] Login',
  AuthTokenSuccess = '[Auth] Token Success',
  AuthLoginSuccess = '[Auth] Login Success',
  AuthLogout = '[Auth] Logout',
}

export class AuthLogin implements Action {
  readonly type = AuthActionTypes.AuthLogin;
  constructor(public payload: LoginDetails) { }
}

export class AuthTokenSuccess implements Action {
  readonly type = AuthActionTypes.AuthTokenSuccess;
  constructor(public payload: TokenResponse) { }
}

export class AuthLoginSuccess implements Action {
  readonly type = AuthActionTypes.AuthLoginSuccess;
  constructor(public payload: any) { }
}

export class AuthLogout implements Action {
  readonly type = AuthActionTypes.AuthLogout;
}


export type AuthActions =
| AuthLogin
| AuthTokenSuccess
| AuthLoginSuccess
| AuthLogout;
