import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';

@Component({
  selector: 'qiqo-order-shell',
  templateUrl: './order-shell.component.html',
  styleUrls: ['./order-shell.component.css']
})
export class OrderShellComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'Orders'}
    ]);
  }

  ngOnInit() {
  }

}
