import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../../node_modules/ngx-webstorage';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services';
import { map, take } from 'rxjs/operators';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private store: LocalStorageService,
        private authService: AuthenticationService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return ;
    }
}
