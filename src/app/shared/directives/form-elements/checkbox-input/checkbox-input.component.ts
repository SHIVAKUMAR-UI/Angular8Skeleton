import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css']
})
export class CheckboxInputComponent implements OnInit {

  @Input() formRef: FormGroup;
  @Input() elementRef: FormControl;
  @Input() elementName: any;
  @Input() errorText: any;
  @Input() formControlNm: any;
  @Input() columnsRequired: any;
  constructor() { }

  ngOnInit() {
  }

}
