import { Component, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { isAuthenticated } from '../../store/Auth/selectors/auth.selector';
import { AuthState } from '../../models/login.models';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  subscription: Subscription;
  isLoading$: boolean;
  constructor(private loaderService: LoadingService) {
    
   }

  ngOnInit() {
    this.subscription = this.loaderService.getLoader().subscribe((res: any) => {
      this.isLoading$ = res.value;
    });
  }

  destroySubscription(): void {
    this.subscription.unsubscribe();
  }



}
