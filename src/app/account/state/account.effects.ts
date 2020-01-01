import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as accountActions from './account.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AccountService } from 'src/app/shared/account.service';

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions, private accountService: AccountService) {}

  loadAccounts$ = createEffect(() => this.actions$.pipe(
    ofType(accountActions.fetchAccounts),
    mergeMap(action => this.accountService.getAccounts().pipe(
        map(accounts => (accountActions.fetchAccountsSuccess({ payload: accounts }))),
        catchError(err => of(accountActions.fetchAccountsFail(err.message)))
      ))
  ));
  loadAccount$ = createEffect(() => this.actions$.pipe(
    ofType(accountActions.fetchAccount),
    mergeMap(action => this.accountService.getAccount(action.payload).pipe(
        map(account => (accountActions.fetchAccountSuccess({ payload: account }))),
        catchError(err => of(accountActions.fetchAccountFail(err.message)))
      ))
  ));
  // findAccount$ = createEffect(() => this.actions$.pipe(
  //   ofType(accountActions.findAccount),
  //   mergeMap(action => this.accountService.findAccount(action.payload.searchTerm).pipe(
  //       map(accounts => {
  //         const found = accounts.map(a => { code: account.accountCode, name: account.accountName, note: account.accountDesc }())
  //         return accountActions.findAccountSuccess({ payload: found })
  //       }),
  //       catchError(err => of(accountActions.fetchAccountFail(err.message)))
  //     ))
  // ));
  loadRecentAccounts$ = createEffect(() => this.actions$.pipe(
    ofType(accountActions.fetchAccounts),
    mergeMap(action => this.accountService.getRecentAccounts().pipe(
        map(accounts => (accountActions.fetchRecentAccountsSuccess({ payload: accounts }))),
        catchError(err => of(accountActions.fetchRecentAccountsFail(err.message)))
      ))
  ));
}
