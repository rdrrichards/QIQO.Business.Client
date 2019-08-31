import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as accountActions from './account.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AccountService } from 'src/app/shared/account.service';

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions, private accountService: AccountService) {}

  loadAccount$ = createEffect(() => this.actions$.pipe(
    ofType(accountActions.fetchAccount),
    mergeMap(() => this.accountService.getAccount(1).pipe(
        map(user => (accountActions.fetchAccountSuccess(user)),
        catchError(err => of(accountActions.fetchAccountFail(err.message)))
        )
      ))
  ));
}
