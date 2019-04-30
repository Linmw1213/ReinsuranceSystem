import { Injectable } from '@angular/core';
import { User } from '../VO/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private httpClient: HttpClient) { }

  // modifyUserInfo(user: User): Observable<User>{
  //   return this.httpClient.put();
  // }
}
