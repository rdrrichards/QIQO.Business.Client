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
  getDashboardOverviews(): Observable<DashboardItem[]> {
    return this.httpClient.get<DashboardItem[]>(`${environment.dashboardsUrl}?type=overview`);
  }
  getDashboardTables(): Observable<DashboardItem[]> {
    return this.httpClient.get<DashboardItem[]>(`${environment.dashboardsUrl}?type=table`);
  }
}
