import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() formRef: FormGroup;
  @Input() elementRef: FormControl;
  @Input() elementName: any;
  @Input() formControlNm: any;
  @Input() selectList: any;
  @Input() columnsRequired: number;
  constructor() { }

  ngOnInit() {
  }

}
