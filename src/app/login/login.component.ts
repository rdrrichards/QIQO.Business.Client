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
  userName: string;
  password: string;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {}
  login() {
    this.store.dispatch(appActions.fetchUser({ userName: this.userName, password: this.password }));
  }
}
