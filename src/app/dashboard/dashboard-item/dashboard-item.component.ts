import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qiqo-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {
  @Input() type: string;
  @Input() primary: string;
  @Input() secondary: string;
  constructor() { }

  ngOnInit() {
  }

}
