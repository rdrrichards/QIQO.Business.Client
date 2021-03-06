import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qiqo-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() class: string;
  @Input() primary: string;
  @Input() secondary: string;
  @Input() primaryIcon: string;
  @Input() secondaryIcon: string;
  @Input() cols: any[];
  @Input() data: any[];
  constructor() { }

  ngOnInit() {
    if (this.primaryIcon === 'dollar') {
      this.primary = `$ ${this.primary}`;
    }
  }

}
