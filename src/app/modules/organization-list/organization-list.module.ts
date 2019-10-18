import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormElementsModule } from 'src/app/shared/directives/form-elements/form-elements.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { OrganizationListComponent } from './organization-list.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  {
      path: '',
      component: OrganizationListComponent
  },
  {
    path: 'org',
    component: OrganizationComponent
}
];

@NgModule({
  declarations: [
    OrganizationListComponent
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
    OrganizationListComponent
  ],
  entryComponents: [OrganizationListComponent]
})
export class OrganizationListModule { }
