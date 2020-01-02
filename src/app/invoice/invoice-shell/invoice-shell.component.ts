import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/shared/breadcrumb.service';
import { EntityType, SearchResult, Invoice } from 'src/app/models';
import { InvoiceState } from '../state';
import { Store, select } from '@ngrx/store';
import * as invoiceReducer from '../state/invoice.reducer';
import * as invoiceActions from '../state/invoice.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'qiqo-invoice-shell',
  templateUrl: './invoice-shell.component.html',
  styleUrls: ['./invoice-shell.component.css']
})
export class InvoiceShellComponent implements OnInit {
  invoices$: Observable<Invoice>;
  EntityType = EntityType;
  searchResults: SearchResult[];

  constructor(private breadcrumbService: BreadcrumbService, private invoiceStore: Store<InvoiceState>) {
    this.breadcrumbService.setItems([
      {label: 'Invoices'}
    ]);
  }

  ngOnInit() {
    this.invoices$ = this.invoiceStore.pipe(select(invoiceReducer.selectCurrentInvoice));
    this.invoiceStore.pipe(select(invoiceReducer.selectFoundInvoices)).subscribe(invoices => {
      if (invoices  && invoices.length > 0) {
        this.searchResults = invoices;
      }
    });
  }
  onNewResults(event: SearchResult[]) {
    this.invoiceStore.dispatch(invoiceActions.findInvoicesSuccess({ payload: event.length > 0 ? event : [] }));
  }
}
