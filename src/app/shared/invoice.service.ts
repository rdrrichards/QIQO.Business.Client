import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private httpClient: HttpClient) { }
  getInvoice(userName: string): Observable<Invoice> {
    return this.httpClient.get<Invoice>(`${environment.usersUrl}?name=${userName}`).pipe(map(users => users[0]));
  }
}
