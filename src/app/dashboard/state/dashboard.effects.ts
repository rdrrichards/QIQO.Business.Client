import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as dashboardActions from './dashboard.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DashboardService } from 'src/app/shared/dashboard.service';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private dashboardService: DashboardService) {}

  loadDashboardItems$ = createEffect(() => this.actions$.pipe(
    ofType(dashboardActions.fetchDashboardItems),
    mergeMap(() => this.dashboardService.getDashboardItems().pipe(
        map(items => (dashboardActions.fetchDashboardItemsSuccess({ payload: items})),
        catchError(err => of(dashboardActions.fetchDashboardItemsFail(err.message)))
        )
      ))
  ));
}
