import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../shared/authentication.service';
import * as orderActions from './order.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class OrderEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(orderActions.fetchUser),
    mergeMap(() => this.authenticationService.getUser('').pipe(
        map(user => (orderActions.fetchUserSuccess(user)),
        catchError(err => of(orderActions.fetchUserFail(err.message)))
        )
      ))
  ));
}
