import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidator } from '../shared/directives/validators/customValidator.directive';
import { AuthenticationService } from '../shared/services';
import { ToastrService } from 'ngx-toastr';

import { AuthState } from '../shared/models/login.models';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { AuthLogin, AuthLogout } from '../shared/store/Auth/actions/auth.actions';
import { isLoading } from '../shared/store/Auth/selectors/auth.selector';
import { LoadingService } from '../shared/services/loading.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  subscription: Subscription;
  isLoading$: boolean;
  
  constructor(private fb: FormBuilder, private authService: AuthenticationService,
    private toasterService: ToastrService,
    private loaderService: LoadingService,
    private loadingService: LoadingService,
    private store: Store<AuthState>) {
      
    this.createForm();
    this.subscription = this.loaderService.getLoader().subscribe((res: any) => {
      this.isLoading$ = res.value;
    });
  }

  destroySubscription(): void {
    this.subscription.unsubscribe();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
      // imei: ['', [Validators.required, CustomValidator.ValidateImei]],
      // phoneNumber: ['', [Validators.required, CustomValidator.ValidatePhoneNumber]],
      password: ['', Validators.required]
    });

    // this.loginForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

  onClickSubmit() {
    // console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.loadingService.setLoader(of(true));
      this.store.dispatch(new AuthLogin(this.loginForm.value));
    } else {
      this.validateAllFormFields(this.loginForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(new AuthLogout());
    this.authService.redirect();
  }

}
