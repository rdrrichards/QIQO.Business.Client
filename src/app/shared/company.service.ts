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
  getCompany(userName: string): Observable<Company> {
    return this.httpClient.get<Company>(`${environment.usersUrl}?name=${userName}`).pipe(map(users => users[0]));
  }
}
