import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DashboardItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private httpClient: HttpClient) { }
  getDashboardItems(): Observable<DashboardItem[]> {
    console.log('DashboardService.getDashboardItems');
    return this.httpClient.get<DashboardItem[]>(environment.dashboardsUrl);
  }
  // getAccount(accountKey: number): Observable<Account> {
  //   console.log('AccountService.getAccount', `${environment.accountsUrl}?accountKey=${accountKey}`);
  //   return this.httpClient.get<Account>(`${environment.accountsUrl}?accountKey=${accountKey}`).pipe(map(account => account[0]));
  // }
}
