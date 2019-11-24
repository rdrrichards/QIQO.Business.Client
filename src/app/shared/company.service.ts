import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private httpClient: HttpClient) { }
  getCompany(key: number): Observable<Company> {
    return this.httpClient.get<Company>(`${environment.companiesUrl}?companyKey=${key}`).pipe(map(users => users[0]));
  }
  findCompany(term: string): Observable<Company[]> {
    console.log('CompanyService.findCompany', `${environment.companiesUrl}?companyName=${term}`);
    return this.httpClient.get<Company[]>(`${environment.companiesUrl}?companyName=${term}`);
  }
}
