import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { InvoiceStatus } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private httpClient: HttpClient) { }
  getInvoice(InvoiceKey: number): Observable<Invoice> {
    console.log('InvoiceService.getInvoice', `${environment.invoicesUrl}?InvoiceKey=${InvoiceKey}`);
    return this.httpClient.get<Invoice>(`${environment.invoicesUrl}?InvoiceKey=${InvoiceKey}`).pipe(map(invoice => invoice[0]));
  }
  findInvoice(term: string): Observable<Invoice[]> {
    console.log('InvoiceService.findInvoice', `${environment.invoicesUrl}?InvoiceNumber=${term}`);
    return this.httpClient.get<Invoice[]>(`${environment.invoicesUrl}?InvoiceNumber=${term}`);
  }
  getRecentInvoices(): Observable<Invoice[]> {
    console.log('InvoiceService.getInvoices');
    return this.httpClient.get<Invoice[]>(`${environment.invoicesUrl}/recent`);
  }
  saveInvoice(invoice: Invoice): Observable<Invoice> {
    console.log('InvoiceService.getInvoices');
    return this.httpClient.post<Invoice>(`${environment.invoicesUrl}`, invoice);
  }
  cancelInvoice(invoice: Invoice): Observable<Invoice[]> {
    console.log('InvoiceService.getInvoices');
    invoice.invoiceStatus = InvoiceStatus.Canceled;
    return this.httpClient.put<Invoice[]>(`${environment.invoicesUrl}`, invoice);
  }
}
