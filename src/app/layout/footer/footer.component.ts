import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    
  }

  onLogout() {
    this.authService.logout();
  }
}
