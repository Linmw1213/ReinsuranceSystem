import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../VO/user';
import { Company } from '../VO/company';
import { ReinsType } from '../VO/reinsType';
import { Contract } from '../VO/contract';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logURL = 'http://localhost:8080/log';

  constructor(private httpClient: HttpClient) { }

  getUserLoginLog(): Observable<any> {
    return this.httpClient.get<User>(this.logURL + '/login');
  }

  deleteUserLoginLog(userId: any): Observable<any> {
    return this.httpClient.put<User>(this.logURL + '/deleteLogin/' + userId, null);
  }

  getCompanyLog(): Observable<any> {
    return this.httpClient.get<Company>(this.logURL + '/company');
  }

  deleteCompanyLog(id: any): Observable<any> {
    return this.httpClient.put<Company>(this.logURL + '/deleteCompany/' + id, null);
  }


  deleteContractLog(id: any): Observable<any> {
    return this.httpClient.put<Contract>(this.logURL + '/deleteContract/' + id,null);
  }

  getContractLog(): Observable<any> {
    return this.httpClient.get<Contract>(this.logURL + '/contract');
  }


  getReinsTypeLog(): Observable<any> {
    return this.httpClient.get<ReinsType>(this.logURL + '/reinsType');
  }

  deleteReinsTypeLog(id: any): Observable<any> {
    return this.httpClient.put<ReinsType>(this.logURL + '/deleteReinsType/' + id,null);
  }

}
