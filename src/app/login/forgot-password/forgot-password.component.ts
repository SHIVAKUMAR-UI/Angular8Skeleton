import { Component, OnInit, TemplateRef, Input, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { AuthLogin } from 'src/app/shared/store/Auth/actions/auth.actions';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from 'ngx-bootstrap';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  isLoading$: boolean;
  confirmationAlert: boolean;
  @Input('confirmation') confirmationRef: TemplateRef<any>;

  constructor(private fb: FormBuilder, 
    private authService: AuthenticationService,
    private loadingService: LoadingService,
    private toasterService: ToastrService,
    private utilityServices: UtilityService) { }

  ngOnInit() {
    this.createForm();
    
  }

  createForm() {
    this.forgotForm = this.fb.group({
      userid: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
      
    });
  }

  onClickSubmit() {
    if (this.forgotForm.valid) {
      this.loadingService.setLoader(of(true));
      this.openConfirmationAlert();
      this.authService.getPasswordLink(this.forgotForm.value).subscribe(() => {
        this.openConfirmationAlert();
        this.loadingService.setLoader(of(false));
      }, (errorResponse) => {
        this.loadingService.setLoader(of(false));
        this.toasterService.error('Unable to send the link. Please check your User Id', 'Fail!');
      });
    } else {
      this.validateAllFormFields(this.forgotForm);
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

  openConfirmationAlert(){
    const assignuserInstance = this.utilityServices.openModal('confirmationPassword', {});
    assignuserInstance.result.then((response) => {

    }).catch(() => { });
  }

  
}
