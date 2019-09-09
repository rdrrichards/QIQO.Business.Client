import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';

@Component({
  selector: 'qiqo-invoice-shell',
  templateUrl: './invoice-shell.component.html',
  styleUrls: ['./invoice-shell.component.css']
})
export class InvoiceShellComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      {label: 'Invoices'}
    ]);
  }
  ngOnInit() {
  }

}
