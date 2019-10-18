import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormElementsModule } from 'src/app/shared/directives/form-elements/form-elements.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UserComponent } from '../user-management/user/user.component';
import { UserManagementComponent } from '../user-management/user-management.component';
import { AdministratorComponent } from './administrator.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { RoleManagementComponent } from '../role-management/role-management.component';
import { RoleComponent } from '../role-management/role/role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserManagementModule } from '../user-management/user-management.module';
import { RoleManagementModule } from '../role-management/role-management.module';
import { AdministratorService } from 'src/app/shared/services';
import { TranslateModule } from '@ngx-translate/core';
import { OrganizationListModule } from '../organization-list/organization-list.module';

const routes: Routes = [
  {
      path: '',
      component: AdministratorComponent
  }

];

@NgModule({
  declarations: [
    AdministratorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormElementsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    UserManagementModule,
    RoleManagementModule,
    OrganizationListModule,
    TranslateModule.forChild(),
    NgxPermissionsModule.forChild(),
    RouterModule.forChild(routes),
    
  ],
  entryComponents: [],
  providers: [
    AdministratorService
  ]
})
export class AdministratorModule { }
