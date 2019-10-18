import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  
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
