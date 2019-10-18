import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, pluck, map, catchError, withLatestFrom } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

import { get, map as arrayMap } from 'lodash';
import { Store } from '@ngrx/store';


import { userEmail, accessToken, featureList } from '../selectors/auth.selector';
import {
  AuthActionTypes,
  AuthActions,
  AuthLoginSuccess,
  AuthTokenSuccess,
  AuthLogout
} from '../actions/auth.actions';
import { AuthenticationService } from 'src/app/shared/services';
import { LoginDetails, AuthState, UserResponse, Feature } from 'src/app/shared/models/login.models';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthEffects {


  @Effect() authLogin$ = this.actions$.pipe(
    ofType(AuthActionTypes.AuthLogin),
    pluck('payload'),
    switchMap((userLoginDetails: LoginDetails): any => {
      return this.authService.loginOAuthToken(userLoginDetails).pipe(
        map(res => new AuthTokenSuccess(res)),
        catchError(() => {
          this.toastrService.error('Fail', 'Invalid Username/Password');
          return [new AuthLogout()];
        }));
    })
  );

  @Effect() authTokenSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.AuthTokenSuccess),
    withLatestFrom(this.store$.select(accessToken)),
    // tslint:disable-next-line:no-unused
    map(([_, token]) => {
      return token;
    }),
    switchMap((token: string): any => {
      if (token) {
        return forkJoin([this.authService.getUserDetails()]).pipe(
          map(res => {
            const obj = {
              ...res[0]
            };
            return new AuthLoginSuccess(obj);
          }),
          catchError(() => {
            return [new AuthLogout()];
          }));
      }
      return [new AuthLogout()];
    })
  );

  @Effect({ dispatch: false }) authLoginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.AuthLoginSuccess),
    pluck('payload'),
    map((res: UserResponse): any => {
      if (res) {
        this.store$.select(featureList).subscribe(featureList_ => {
          let roles = {}
          if (featureList_) {
            featureList_.forEach((feature) => {
              roles = Object.assign(roles, this.authService.getFeatureChildrensList(feature));
            });
            this.rolesService.addRoles(roles);
            const perm = <any>Object.keys(this.rolesService.getRoles());
            this.permissionsService.loadPermissions(perm);
          }

          this.authService.redirect();
        });

      }
    })
  );

  @Effect({ dispatch: false }) authLoginFailed$ = this.actions$.pipe(
    ofType(AuthActionTypes.AuthLogout),
    map(() =>
      this.authService.redirect()));



  constructor(private actions$: Actions<AuthActions>, private authService: AuthenticationService,
    private loadingService: LoadingService,
    private toastrService: ToastrService,
    private rolesService: NgxRolesService,
    private permissionsService: NgxPermissionsService, private store$: Store<AuthState>) { }

}
