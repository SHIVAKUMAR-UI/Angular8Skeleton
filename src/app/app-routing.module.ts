import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards';
import { getBaseOrganizationLocation } from './shared/util';
import { APP_BASE_HREF } from '@angular/common';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
            { path: 'forgotpassword', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
            { path: 'setpassword', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
            {
                path: 'dashboard', loadChildren: () => import(`./modules/dashboard/dashboard.module`).then(m => m.DashboardModule),
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: 'FET00013',
                        redirectTo: '/not-found'
                    }
                }
            },
            {
                path: 'test',
                loadChildren: () => import(`./modules/testcomponent/testcomponent.module`).then(m => m.TestComponentModule),
                canActivate: [NgxPermissionsGuard],
                data: {
                    // permissions: {
                    //     except: 'FET00000',
                    //     redirectTo: '/dashboard'
                    // }
                }
            },
            {
                path: 'administrator',
                loadChildren: () => import(`./modules/administrator/administrator.module`).then(m => m.AdministratorModule),
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: 'FET00006',
                        redirectTo: '/not-found'
                    }
                }
            },
            { path: 'error', loadChildren: () => import(`./core/server-error/server-error.module`).then(m => m.ServerErrorModule) },
            { path: 'access-denied', loadChildren: () => import(`./core/access-denied/access-denied.module`).then(m => m.AccessDeniedModule) },
            { path: 'not-found', loadChildren: () => import(`./core/not-found/not-found.module`).then(m => m.NotFoundModule) },
            { path: '**', redirectTo: 'login' },
            { path: '', redirectTo: '/administrator', pathMatch: 'full' },
            { path: 'home', redirectTo: '/dashboard' }
        ]
    }
];

// const orgroutes: Routes = [
//     {
//         path: 'manama',
//         children: routes,
//         data: { companyId: 1 }
//     }
// ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    // ,
    // providers: [
    //     {
    //         provide: APP_BASE_HREF,
    //         useFactory: getBaseOrganizationLocation
    //     },
    // ]
})
export class AppRoutingModule { }
