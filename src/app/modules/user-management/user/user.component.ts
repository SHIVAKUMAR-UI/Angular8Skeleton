import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AdministratorService } from 'src/app/shared/services';
import { CustomValidator } from 'src/app/shared/directives/validators/customValidator.directive';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: AdministratorService,
    private acitveModal: NgbActiveModal) {
    this.createForm();
   }

  ngOnInit() {
    
  }

  createForm() {
    this.userForm = this.fb.group({
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

    // this.userForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

  onClickSubmit(form: any) {
    console.log(form.value);
    if (this.userForm.valid) {
      this.userService.saveUser({ userName: ''}).subscribe((response)=> {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
      return false;
    } else {
      this.validateAllFormFields(this.userForm);
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
