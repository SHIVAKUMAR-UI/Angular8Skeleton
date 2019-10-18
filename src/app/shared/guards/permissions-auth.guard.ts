
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services';
import { of } from 'rxjs';

@Injectable()
export class PermissionsAuthenticationGuard implements CanActivate {
    privileges: {};

    constructor(private authService: AuthenticationService,
        private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

            return of();
        /** return this.authService.getAuthUserDetails().map(() => {
            // this.privileges = this.authService.getAvailablePrivileges();

            switch (state.url.split('?')[0]) {
                case '/regularsales':
                    return this.checkPrivilege('Regular Sale');
                case '/cashwithdraw':
                    return this.checkPrivilege('Regular Sale');
                case '/transactionhistory':
                    return this.checkPrivilege('Transaction History');
                case '/inventorysearch':
                    return this.checkPrivilege('Inventory Search');
                case '/admin/giftcoupons':
                    return this.checkPrivilege('Gift Coupons');
                case '/admin/rolemanagement':
                    return this.checkPrivilege('Role Management');
                case '/admin/rolemanagement/edit':
                    return this.checkPrivilege('Role Management');
                case '/admin/assignrole':
                    return this.checkPrivilege('Student Management');
                case '/admin/usermanagement':
                    return this.checkPrivilege('Student Management');
                case '/admin/customermanagement':
                    return this.checkPrivilege('Customer Management');
                case '/admin/terminalmanagement':
                    return this.checkPrivilege('Terminal Management');
                case '/admin/terminalmanagement/manageterminal':
                    return this.checkPrivilege('Terminal Management');
                case '/admin/labelprinting':
                    return this.checkPrivilege('Label/Tag Printing');
                case '/admin/configurations':
                    return this.checkPrivilege('Configuration Management');
                default:
                    this.router.navigate(['/login']);
            } }); */

    }

    checkPrivilege(privilege): boolean {
        if (this.privileges['' + privilege]) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
