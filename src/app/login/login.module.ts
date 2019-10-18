import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormElementsModule } from '../shared/directives/form-elements/form-elements.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from './forgot-password/confirmation/confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'setpassword',
    component: SetPasswordComponent
  }
];


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FormElementsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    NgbActiveModal
  ]
})
export class LoginModule { }
