import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  getUser(userName: string): Observable<User> {
    console.log('getUser', userName);
    return this.httpClient.get<User>(`${environment.usersUrl}?name=${userName}`).pipe(map(users => users[0]));
  }
}
