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
    mergeMap(() => this.companyService.getCompany('').pipe(
        map(user => (companyActions.fetchCompanySuccess(user)),
        catchError(err => of(companyActions.fetchCompanyFail(err.message)))
        )
      ))
  ));
}
