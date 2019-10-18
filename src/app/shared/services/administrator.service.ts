import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import { Router } from '@angular/router';
import { LoginDetails, AuthState } from '../models/login.models';
import { EndPoints, environment } from 'src/environments/environment';
import { AUTHORIZED_GRANT_TYPES, CONTENT_TYPE } from '../constants/constants';
import { Store } from '@ngrx/store';
import { isAuthenticated } from '../store/Auth/selectors/auth.selector';
import { LoadingService } from './loading.service';



@Injectable()
export class AdministratorService {
  isAuthenticated: boolean;
  subscription: Subscription;

  constructor(private http: HttpClient) {
  }

  /* 
      User services Starts
      */

  getUserList(): Observable<any> {
    // const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/user/all-users`;
    
    const authUrl = `${EndPoints.root}user.json`;

    return this.http.get(authUrl);
  }

  updateUser(user: any): Observable<any> {
    const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/user`;
    return this.http.put(authUrl, user);
  }

  saveUser(user: any): Observable<any> {
    const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/organization/active-organizations`;
    return this.http.post(authUrl, user);
  }

  deleteUser(id: string): Observable<any> {
    const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/user/${id}`;
    return this.http.delete(authUrl);
  }
  /* 
      User services Ends
      */

  /* 
      Role services Starts
      */

  getRoleList(): Observable<any> {

    // const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/role/active-roles`;
    const authUrl = `${EndPoints.root}role.json`;
    return this.http.get(authUrl);
  }

  updateRole(role: any): Observable<any> {
    const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/role`;
    return this.http.put(authUrl, role);
  }

  saveRole(role: any): Observable<any> {
    const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/organization/active-organizations`;
    return this.http.post(authUrl, role);
  }

  deleteRole(id: string): Observable<any> {
    const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/role/${id}`;
    return this.http.delete(authUrl);
  }

  /* 
      Role services Ends
      */

  /* 
  Organization services Starts
  */

  getOrgList(): Observable<any> {

    // const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/organization/active-organizations`;
    const authUrl = `${EndPoints.root}organization.json`;
    return this.http.get(authUrl);
  }

  updateOrg(user: any): Observable<any> {
    const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/organization`;
    return this.http.put(authUrl, user);
  }

  saveOrg(org: any): Observable<any> {
    const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/organization/active-organizations`;
    return this.http.post(authUrl, org);
  }

  deleteOrg(id: string): Observable<any> {
    const authUrl = `${EndPoints.domain}${EndPoints.port}${EndPoints.root}v1/organization/${id}`;
    return this.http.delete(authUrl);
  }

  /* 
    Organization services Ends
    */
}
