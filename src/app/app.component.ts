import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state';
import * as appActions from './state/app.actions';

@Component({
  selector: 'qiqo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  constructor(private store: Store<AppState>) {
    this.store.dispatch(appActions.fetchUser());
  }
}
