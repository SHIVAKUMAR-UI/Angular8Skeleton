import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import { Router } from '@angular/router';
import { LoginDetails, AuthState, Feature } from '../models/login.models';
import { EndPoints, environment } from 'src/environments/environment';
import { AUTHORIZED_GRANT_TYPES, CONTENT_TYPE } from '../constants/constants';
import { Store } from '@ngrx/store';
import { isAuthenticated, featureList } from '../store/Auth/selectors/auth.selector';
import { LoadingService } from './loading.service';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';



@Injectable()
export class AuthenticationService {
  isAuthenticated: boolean;
  subscription: Subscription;
  roles: any = {};

  constructor(private http: HttpClient,
    private rolesService: NgxRolesService,
    private prermissionsService: NgxPermissionsService,
    private router: Router,
    private loadingService: LoadingService,
    private store: Store<AuthState>) {
    this.subscription = this.store.select(isAuthenticated).subscribe(res => {
      this.isAuthenticated = res;
    });
  }


  loginOAuthToken(loginDetails: LoginDetails): Observable<any> {

    const headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + environment.oAuthHeader)
      .set('Content-Type', 'application/x-www-form-urlencoded');

    let body = new HttpParams();
    body = body.set('username', loginDetails.username);
    body = body.set('password', loginDetails.password);
    body = body.set('grant_type', AUTHORIZED_GRANT_TYPES.PASSWORD);

    // Need to replace with pricipal call If your are using OAuth and No need to add domain and port as we are using proxy to redirect

    const authUrl = `${EndPoints.root}token.json`;
    // return this.http.post(authUrl, body, { headers: headers });
    return this.http.get(authUrl);
  }

  login(user: any) {
    if (user.userName !== '' && user.password !== '') {

      this.router.navigate(['/']);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + environment.oAuthHeader)
      .set('Content-Type', CONTENT_TYPE.APPLICATION_URL_ENCODED);
    return headers;
  }

  redirect(): void {
    if (this.isAuthenticated) {
      if (localStorage.getItem('lastRouteState')) {
        this.router.navigateByUrl(localStorage.getItem('lastRouteState'));
        localStorage.removeItem('lastRouteState');
      } else {
        this.redirectWithPriority();
      }
    } else {
      this.router.navigate(['/login']);
    }
    this.loadingService.setLoader(of(false));
    window.onbeforeunload = () => {
      if (this.router.url.indexOf('/login') === -1) {
        localStorage.setItem('lastRouteState', this.router.url);
      }
    };
  }

  redirectWithPriority() {
    this.store.select(featureList).subscribe(featureList_ => {
      if (featureList_) {
        this.router.navigate([featureList_[0].url]);
      } else {
        this.router.navigate(['/login']);
      }
    });

  }

  getFeatureChildrensList(featureList: any): any {
    if (featureList['childFeatures']) {
      featureList['childFeatures'].forEach(feature => {
        if(!this.roles[featureList.code]){this.roles[featureList.code] = [];}
        this.roles[featureList.code].push(feature.code);
        if (feature['childFeatures']) {
          this.getFeatureChildrensList(feature);
        } else {
          if(!this.roles[feature.code]){
            this.roles[feature.code] = [];
          }
          feature['deleteAccessEnabled'] ? this.roles[feature.code].push('delete') : '';
          feature['editAccessEnabled'] ? this.roles[feature.code].push('edit') : '';
          feature['readAccessEnabled'] ? this.roles[feature.code].push('read') : '';
        }
      });
    } 
    return this.roles;
  }



  destroySubscription(): void {
    this.subscription.unsubscribe();
  }

  getUserDetails(): Observable<any> {
    
    // Need to replace with pricipal call If your are using OAuth
    // const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}principal.json`; 
    const authUrl = `${EndPoints.root}principal.json`;
    return this.http.get(authUrl);
  }



  getPasswordLink(loginDetails: any):  Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + environment.oAuthHeader)
      .set('Content-Type', 'application/x-www-form-urlencoded');

    let body = new HttpParams();
    body = body.set('username', loginDetails.userid);

    const authUrl = `${EndPoints.root}oauth/passwordlink`;
    return this.http.post(authUrl, body, { headers: headers });
  }

}
