import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { ProductService } from './product.service';
import { CompanyService } from './company.service';
import { InvoiceService } from './invoice.service';
import { OrderService } from './order.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private accountService: AccountService,
              private companyService: CompanyService,
              private invoiceService: InvoiceService,
              private orderService: OrderService,
              private productService: ProductService, ) { }
  findAccount(term: string): Observable<SearchResult[]> {
    return this.accountService.findAccount(term).pipe(
      map(accounts =>
        accounts.map(account => ({ code: account.accountCode, name: account.accountName, note: account.accountDesc })))
    );
  }
  findCompany(term: string): Observable<SearchResult[]> {
    return this.companyService.findCompany(term).pipe(
      map(companies =>
        companies.map(company => ({ code: company.companyCode, name: company.companyName, note: company.companyDesc })))
    );
  }
  findInvoice(term: string): Observable<SearchResult[]> {
    return this.invoiceService.findInvoice(term).pipe(
      map(invoices =>
        invoices.map(invoice => ({ code: invoice.invoiceNumber, name: invoice.account.accountName,
          note: invoice.invoiceEntryDate.toString() })))
    );
  }
  findOrder(term: string): Observable<SearchResult[]> {
    return this.orderService.findOrder(term).pipe(
      map(orders =>
        orders.map(order => ({ code: order.orderNumber, name: order.account.accountName,
          note: order.orderEntryDate.toString() })))
    );
  }
  findProduct(term: string): Observable<SearchResult[]> {
    return this.productService.findProduct(term).pipe(
      map(products =>
        products.map(product => ({ code: product.productCode, name: product.productName, note: product.productDesc })))
    );
  }
}
