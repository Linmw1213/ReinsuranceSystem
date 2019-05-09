import { Injectable } from '@angular/core';
import { User } from '../VO/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRole } from '../VO/userRole';
import { Role } from '../VO/Role';

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

  queryUserRoleById(id: any): Observable<any> {
    return this.httpClient.get<any>(this.userURL + '/getRole/' + id);
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userURL + '/getAll');
  }

  addUser(user: User): Observable<any> {
    return this.httpClient.post<User>(this.userURL + '/addUser', user);
  }

  getLastUserId(): Observable<any>{
    return this.httpClient.get<User>(this.userURL + '/getLastUserId');
  }
  addRole(role: Role): Observable<any> {
    return this.httpClient.post<User>(this.userURL + '/addRole', role);
  }

  getSelfInfo(userId: any): Observable<any> {
    return this.httpClient.get<User>(this.userURL + '/getCurrentUser/' + userId);
  }

  updateInfo(user: User): Observable<any> {
    return this.httpClient.put<any>(this.userURL + '/update', user);
  }

  updateUserRole(userRole: UserRole): Observable<any> {
    return this.httpClient.put<UserRole>(this.userURL + '/updateRole', userRole);
  }

  deleteUser(userId: any): Observable<any> {
    return this.httpClient.delete<User>(this.userURL + '/deleteUser/' + userId);
  }

  deleteRole(uid: any): Observable<any> {
    return this.httpClient.delete<Role>(this.userURL + '/deleteRole/' + uid);
  }

  updatePwd(user: User): Observable<any> {
    return this.httpClient.put<User>(this.userURL + '/updatePwd', user);
  }

  register(user: User): Observable<any> {
    return this.httpClient.post<User>(this.userURL + '/register', user);
  }
}
