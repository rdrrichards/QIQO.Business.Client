import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';
import { EntityType, SearchResult } from 'src/app/models';

@Component({
  selector: 'qiqo-order-shell',
  templateUrl: './order-shell.component.html',
  styleUrls: ['./order-shell.component.css']
})
export class OrderShellComponent implements OnInit {
  EntityType = EntityType;
  searchResults: SearchResult[];
  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'Orders'}
    ]);
  }

  ngOnInit() {
  }
  onNewResults(event: SearchResult[]) {
    this.searchResults = event;
  }
}
