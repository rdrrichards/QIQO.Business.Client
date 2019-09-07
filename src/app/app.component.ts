import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './state';
import * as appActions from './state/app.actions';
import * as appReducer from './state/app.reducer';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Component({
  selector: 'qiqo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    // this.store.dispatch(appActions.fetchUser());
    this.loggedIn$ = this.store.pipe(select(appReducer.selectLoggedIn));
  }
}
