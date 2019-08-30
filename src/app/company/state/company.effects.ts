import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../shared/authentication.service';
import * as companyActions from './company.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class CompanyEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.fetchUser),
    mergeMap(() => this.authenticationService.getUser('').pipe(
        map(user => (companyActions.fetchUserSuccess(user)),
        catchError(err => of(companyActions.fetchUserFail(err.message)))
        )
      ))
  ));
}
