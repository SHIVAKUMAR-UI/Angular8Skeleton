import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormElementsModule } from 'src/app/shared/directives/form-elements/form-elements.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UserComponent } from './user/user.component';
import { UserManagementComponent } from './user-management.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
      path: '',
      component: UserManagementComponent
  },
  {
    path: 'user',
    component: UserComponent
}
];

@NgModule({
  declarations: [
    UserManagementComponent
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
    UserManagementComponent
  ],
  entryComponents: [UserManagementComponent]
})
export class UserManagementModule { }
