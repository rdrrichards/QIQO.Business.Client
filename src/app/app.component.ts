import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './state';
import * as appReducer from './state/app.reducer';
import { Observable } from 'rxjs';

const counterSettingsDefaults = { setTo: 10, tickSpeed: 200, increment: 1 } as const;

@Component({
  selector: 'qiqo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.loggedIn$ = this.store.pipe(select(appReducer.selectLoggedIn));
    console.log(counterSettingsDefaults);
  }
}
