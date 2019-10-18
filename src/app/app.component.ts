import { Component, Compiler, OnInit } from '@angular/core';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
import { Store, select } from '@ngrx/store';
import { AuthState } from './shared/models/login.models';
import { AuthTokenSuccess } from './shared/store/Auth/actions/auth.actions';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'school';
  organizationCSSClass: String;


  constructor(private _compiler: Compiler,
    private translate: TranslateService,
    private store: Store<AuthState>, private rolesService: NgxRolesService, private permissionsService: NgxPermissionsService) {
    translate.setDefaultLang('en');
    //   this.rolesService.addRoles({
    //     'Administration': ['view', 'edit', 'delete', 'create'],
    //     'Dashboard': ['view', 'edit']
    // });
    //   console.log(Object.keys(this.rolesService.getRoles()));
    //  const perm = <any>this.rolesService.getRoles();
    //  this.permissionsService.loadPermissions(perm);
  }

  ngOnInit() {
    this._compiler.clearCache();

    this.store.dispatch(new AuthTokenSuccess(null));
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
