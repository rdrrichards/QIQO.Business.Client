import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/dashboard.service';
import { Observable } from 'rxjs';
import { DashboardItem } from 'src/app/models';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';

@Component({
  selector: 'qiqo-dashboard-shell',
  templateUrl: './dashboard-shell.component.html',
  styleUrls: ['./dashboard-shell.component.css']
})
export class DashboardShellComponent implements OnInit {
  dashboardItems$: Observable<DashboardItem[]>;
  constructor(private breadcrumbService: BreadcrumbService, private dashboardService: DashboardService) {
    this.breadcrumbService.setItems([
      {label: 'Dashboard'}
    ]);
  }

  ngOnInit() {
    this.dashboardItems$ = this.dashboardService.getDashboardItems();
  }

}
