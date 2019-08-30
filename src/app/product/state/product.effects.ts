import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../shared/authentication.service';
import * as productActions from './product.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(productActions.fetchUser),
    mergeMap(() => this.authenticationService.getUser('').pipe(
        map(user => (productActions.fetchUserSuccess(user)),
        catchError(err => of(productActions.fetchUserFail(err.message)))
        )
      ))
  ));
}
