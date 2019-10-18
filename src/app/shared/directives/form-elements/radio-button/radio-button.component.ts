import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Input() formRef: FormGroup;
  @Input() elementRef: FormControl;
  @Input() elementNames: any;
  @Input() formControlNm: any;
  constructor() { }

  ngOnInit() {
  }

}
