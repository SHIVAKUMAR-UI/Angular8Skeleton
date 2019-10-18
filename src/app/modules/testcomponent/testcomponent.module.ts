import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestcomponentComponent } from './testcomponent.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormElementsModule } from 'src/app/shared/directives/form-elements/form-elements.module';
import { NgxPermissionsModule } from 'ngx-permissions';

const routes: Routes = [
  {
      path: '',
      component: TestcomponentComponent
  }
];

@NgModule({
  declarations: [
    TestcomponentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormElementsModule,
    RouterModule.forChild(routes),
    NgxPermissionsModule.forChild()
  ]
})
export class TestComponentModule { }
