import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../shared/authentication.service';
import * as accountActions from './account.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(accountActions.fetchUser),
    mergeMap(() => this.authenticationService.getUser('').pipe(
        map(user => (accountActions.fetchUserSuccess(user)),
        catchError(err => of(accountActions.fetchUserFail(err.message)))
        )
      ))
  ));
}
