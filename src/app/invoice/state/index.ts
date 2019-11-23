import { Invoice } from 'src/app/models';

export interface InvoiceState {
  currentInvoice?: Invoice;
  foundInvoices?: Invoice[];
  openInvoices?: Invoice[];
  recentInvoices?: Invoice[];
}
