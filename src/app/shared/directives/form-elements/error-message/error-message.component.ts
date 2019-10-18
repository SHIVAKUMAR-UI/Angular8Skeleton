import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() formReference: any;
  @Input() formElementReference: any;
  @Input() errorTextName: any;

  constructor() { }

  ngOnInit() {
  }

}
