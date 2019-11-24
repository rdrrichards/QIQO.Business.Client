import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as companyActions from './company.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CompanyService } from 'src/app/shared/company.service';

@Injectable()
export class CompanyEffects {
  constructor(private actions$: Actions, private companyService: CompanyService) {}

  loadCompany$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.fetchCompany),
    mergeMap(action => this.companyService.getCompany(action.payload).pipe(
        map(company => (companyActions.fetchCompanySuccess({ payload: company })),
        catchError(err => of(companyActions.fetchCompanyFail(err.message)))
        )
      ))
  ));
  findCompany$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.findCompany),
    mergeMap(action => this.companyService.findCompany(action.payload.searchTerm).pipe(
        map(companies => (companyActions.findCompanySuccess({ payload: companies })),
        catchError(err => of(companyActions.fetchCompanyFail(err.message)))
        )
      ))
  ));
}
