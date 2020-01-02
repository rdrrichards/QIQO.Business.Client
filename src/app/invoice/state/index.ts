import { Invoice, SearchResult } from 'src/app/models';

export interface InvoiceState {
  currentInvoice?: Invoice;
  foundInvoices?: SearchResult[];
  openInvoices?: Invoice[];
  recentInvoices?: Invoice[];
}
