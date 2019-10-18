import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/shared/models/login.models';
import { isAuthenticated, featureList } from 'src/app/shared/store/Auth/selectors/auth.selector';
import { AuthLogout, AuthTokenSuccess } from 'src/app/shared/store/Auth/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: boolean;
  featureList: any;
  subscription: Subscription;

  constructor(private authService: AuthenticationService, private store: Store<AuthState>) { }

  ngOnInit() {
    this.subscription = this.store.select(isAuthenticated).subscribe(res => {
      this.isLoggedIn$ = res;
      this.store.select(featureList).subscribe(res_ => {
        this.featureList = res_;
      });
    });

  }

  onLogout() {
    this.store.dispatch(new AuthLogout());
    this.store.dispatch(new AuthTokenSuccess(null));
  }

  destroySubscription(): void {
    this.subscription.unsubscribe();
  }
}