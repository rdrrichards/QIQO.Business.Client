import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state';
import * as appActions from '../state/app.actions';

@Component({
  selector: 'qiqo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  ngOnInit() {}
  login() {
    this.store.dispatch(appActions.fetchUser());
  }
}
