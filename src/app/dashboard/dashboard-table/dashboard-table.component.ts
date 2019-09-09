import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qiqo-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {
  @Input() items: any[];
  @Input() cols: any[];
  selectedItem: any;
  constructor() { }
  ngOnInit() { }
}
