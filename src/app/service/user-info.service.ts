import { Injectable } from '@angular/core';
import { User } from '../VO/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userURL = 'http://localhost:8080/user';

  constructor(private httpClient: HttpClient) { }

  // modifyUserInfo(user: User): Observable<User>{
  //   return this.httpClient.put();
  // }

  login(user: User): Observable<any> {
   return this.httpClient.post<any>(this.userURL + '/login', user);
  }

  getSelfInfo(userId: any): Observable<User> {
    return this.httpClient.get<User>(this.userURL + '/getCurrentUser/'+userId);
  }
}
