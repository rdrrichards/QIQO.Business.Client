import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';
import { EntityType, SearchResult } from 'src/app/models';

@Component({
  selector: 'qiqo-product-shell',
  templateUrl: './product-shell.component.html',
  styleUrls: ['./product-shell.component.css']
})
export class ProductShellComponent implements OnInit {
  EntityType = EntityType;
  searchResults: SearchResult[];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'Products'}
    ]);
  }

  ngOnInit() {
  }
  onNewResults(event: SearchResult[]) {
    this.searchResults = event;
  }

}
