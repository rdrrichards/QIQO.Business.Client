import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/dashboard.service';
import { Observable } from 'rxjs';
import { DashboardItem } from 'src/app/models';

@Component({
  selector: 'qiqo-dashboard-shell',
  templateUrl: './dashboard-shell.component.html',
  styleUrls: ['./dashboard-shell.component.css']
})
export class DashboardShellComponent implements OnInit {
  dashboardItems$: Observable<DashboardItem[]>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardItems$ = this.dashboardService.getDashboardItems();
  }

}
