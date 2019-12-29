import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';
import { EntityType, SearchResult } from 'src/app/models';

@Component({
  selector: 'qiqo-invoice-shell',
  templateUrl: './invoice-shell.component.html',
  styleUrls: ['./invoice-shell.component.css']
})
export class InvoiceShellComponent implements OnInit {
  EntityType = EntityType;
  searchResults: SearchResult[];

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'Invoices'}
    ]);
  }

  ngOnInit() {
  }
  onNewResults(event: SearchResult[]) {
    this.searchResults = event;
  }
}
