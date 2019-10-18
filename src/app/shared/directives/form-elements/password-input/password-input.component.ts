import { Component, OnInit, Input } from '@angular/core';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css']
})
export class PasswordInputComponent implements OnInit {

  @Input() formRef: FormGroup;
  @Input() elementRef: FormControl;
  @Input() elementName: any;
  @Input() formControlNm: any;
  @Input() elementClass: any;
  @Input() columnsRequired:number;
  constructor() { }

  ngOnInit() {
  }

}
