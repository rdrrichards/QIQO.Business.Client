import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpClient: HttpClient) { }
  getAccounts(): Observable<Account[]> {
    console.log('AccountService.getAccounts');
    return this.httpClient.get<Account[]>(environment.accountsUrl);
  }
  getAccount(accountKey: number): Observable<Account> {
    console.log('AccountService.getAccount', `${environment.accountsUrl}?accountKey=${accountKey}`);
    return this.httpClient.get<Account>(`${environment.accountsUrl}?accountKey=${accountKey}`).pipe(map(account => account[0]));
  }
  findAccount(term: string): Observable<Account[]> {
    console.log('AccountService.findAccount', `${environment.accountsUrl}?accountName=${term}`);
    return this.httpClient.get<Account[]>(`${environment.accountsUrl}?accountName=${term}`);
  }
  getRecentAccounts(): Observable<Account[]> {
    console.log('AccountService.getAccounts');
    return this.httpClient.get<Account[]>(`${environment.accountsUrl}/recent`);
  }
}
