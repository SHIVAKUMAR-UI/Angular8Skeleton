import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormElementsModule } from 'src/app/shared/directives/form-elements/form-elements.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
      path: '',
      component: DashboardComponent
  }

];

@NgModule({
  declarations: [
    DashboardComponent,
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
    RouterModule.forChild(routes),
    NgxPermissionsModule.forChild()
  ],
  entryComponents: []
})
export class DashboardModule { }
