import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';
import { EntityType } from 'src/app/models';

@Component({
  selector: 'qiqo-order-shell',
  templateUrl: './order-shell.component.html',
  styleUrls: ['./order-shell.component.css']
})
export class OrderShellComponent implements OnInit {
  EntityType = EntityType;
  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'Orders'}
    ]);
  }

  ngOnInit() {
  }

}
