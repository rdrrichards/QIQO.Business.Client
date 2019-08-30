import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../shared/authentication.service';
import * as adminActions from './admin.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(adminActions.fetchUser),
    mergeMap(() => this.authenticationService.getUser('').pipe(
        map(user => (adminActions.fetchUserSuccess(user)),
        catchError(err => of(adminActions.fetchUserFail(err.message)))
        )
      ))
  ));
}
