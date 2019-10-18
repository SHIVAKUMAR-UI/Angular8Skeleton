import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  @Input() formRef: FormGroup;
  @Input() elementRef: FormControl;
  @Input() elementName: any;
  @Input() formControlNm: any;
  constructor() { }

  ngOnInit() {
  }

}
