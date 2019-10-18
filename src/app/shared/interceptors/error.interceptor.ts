import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services';


// import { AuthenticationService } from '../_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    // constructor(private authenticationService: AuthenticationService) {}

    constructor(public router: Router, private storage: LocalStorageService,
        private authService: AuthenticationService,
        private toaster: ToastrService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.storage.clear();
                // this.authService.logout();
                this.router.navigate(['/login']);
            } else if (err.status === 0) {
                // this.toaster.error('Invalid Request!');
            }


            // const error = err.error.message || err.statusText;
            // return throwError(error);
            return throwError(err);
        }));
    }
}
