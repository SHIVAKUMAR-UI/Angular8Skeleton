import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormElementsModule } from 'src/app/shared/directives/form-elements/form-elements.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleComponent } from './role/role.component';
import { RoleManagementComponent } from './role-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
      path: '',
      component: RoleManagementComponent
  },
  {
    path: 'role',
    component: RoleComponent
}
];

@NgModule({
  declarations: [
    RoleManagementComponent
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
    TranslateModule.forChild(),
    NgbModule.forRoot(),
    // RouterModule.forChild(routes),
    // NgxPermissionsModule.forChild()
  ],
  exports: [
    RoleManagementComponent
  ],
  entryComponents: [RoleManagementComponent]
})
export class RoleManagementModule { }
