import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { accessToken } from '../store/Auth/selectors/auth.selector';
import { ToastrService } from 'ngx-toastr';
import { AuthState } from '../models/login.models';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    accessToken: any;
    constructor(
        private toastr: ToastrService,
        private store: Store<AuthState>
      ) {
      }
      
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if (!this.accessToken) {
            this.store.select(accessToken).pipe(
              take(1)
            ).subscribe(res => this.accessToken = res);
          }
          if (this.accessToken && request.url.indexOf('/token') === -1) {
            request = this.addToken(this.accessToken, request);
          }

        return next.handle(request);
    }

    addToken(data: any, req: HttpRequest<any>): HttpRequest<any> {
        return req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + data) });
      }
}
