import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../shared/authentication.service';
import * as appActions from './app.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.fetchUser),
    mergeMap((loginInfo: appActions.LoginPayload) => this.authenticationService.getUser(loginInfo.userName).pipe(
        map(user => (appActions.fetchUserSuccess(user)),
        catchError(err => of(appActions.fetchUserFail(err.message)))
        )
      ))
  ));
}
