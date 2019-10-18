import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdministratorService } from 'src/app/shared/services';
import { CustomValidator } from 'src/app/shared/directives/validators/customValidator.directive';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  orgForm: FormGroup;
  constructor(private fb: FormBuilder, private orgService: AdministratorService,
    private acitveModal: NgbActiveModal) { 
      this.createForm();
    }

  ngOnInit() {
  }

  createForm() {
    this.orgForm = this.fb.group({
      firstName: ['', [Validators.required]],
      gender: new FormControl('male', [Validators.required]),
      lastName: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      MobileNumber: ['', [Validators.required, CustomValidator.ValidatePhoneNumber]],
      role: ['', [Validators.required]],
      active: ['', [Validators.required]],
      contactAddress: this.fb.group({
        address1: ['', [Validators.required]],
        address2: ['', [Validators.required]],
        city: ['', [Validators.required]],
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipcode: ['', [Validators.required]]
      })

      // imei: ['', [Validators.required, CustomValidator.ValidateImei]],
      // phoneNumber: ['', [Validators.required, CustomValidator.ValidatePhoneNumber]],

    });
  }

  
  onClickSubmit(form: any) {
    console.log(form.value);
    if (this.orgForm.valid) {
      this.orgService.saveOrg({ orgName: ''}).subscribe((response)=> {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
      return false;
    } else {
      this.validateAllFormFields(this.orgForm);
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

  closeModal() {
    this.acitveModal.close();
  }
}
