import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../shared/authentication.service';
import * as dashboardActions from './dashboard.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(dashboardActions.fetchUser),
    mergeMap(() => this.authenticationService.getUser('').pipe(
        map(user => (dashboardActions.fetchUserSuccess(user)),
        catchError(err => of(dashboardActions.fetchUserFail(err.message)))
        )
      ))
  ));
}
