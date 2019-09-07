import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qiqo-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {
  @Input() title: string;
  @Input() class: string;
  @Input() primary: string;
  @Input() secondary: string;
  @Input() primaryIcon: string;
  @Input() secondaryIcon: string;
  constructor() { }

  ngOnInit() {
    if (this.primaryIcon === 'dollar') {
      this.primary = `$ ${this.primary}`;
    }
  }

}
