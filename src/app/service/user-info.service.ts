import { Injectable } from '@angular/core';
import { User } from '../VO/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userURL = 'http://localhost:8080/userInfo';

  constructor(private httpClient: HttpClient) { }

  // modifyUserInfo(user: User): Observable<User>{
  //   return this.httpClient.put();
  // }

  login(user: User): Observable<any> {
    return this.httpClient.post<User>(this.userURL + '/login', user);
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userURL + '/getAll');
  }

  addUser(user: User): Observable<any> {
    return this.httpClient.post<User>(this.userURL + '/add', user);
  }

  getSelfInfo(userId: any): Observable<any> {
    return this.httpClient.get<User>(this.userURL + '/getCurrentUser/' + userId);
  }

  updateInfo(user: User): Observable<any> {
    return this.httpClient.put<User>(this.userURL + '/update', user);
  }

  deleteUser(userId: any): Observable<any> {
    return this.httpClient.delete<User>(this.userURL + '/delete/' + userId);
  }

  updatePwd(user: User): Observable<any> {
    return this.httpClient.put<User>(this.userURL + '/updatePwd', user);
  }

  register(user: User): Observable<any> {
    return this.httpClient.post<User>(this.userURL + '/register',user);
  }
}
