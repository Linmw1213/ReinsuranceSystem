import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../VO/company';
import { transform } from 'typescript';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = "http://localhost:8080/";
  private customersUrl = 'http://localhost:8080/api/test';
  header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
  constructor(private http: HttpClient) { }

  getCompanyMessages(): Observable<Company[]> {
    return this.http.get<Company[]>('/assets/mock-data/company.json');
  }

  test(username: String) {

    const body = { username: username };
     

    this.http.post(this.customersUrl, username,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }),
        responseType: 'text'
      }).subscribe(data => {
        console.log('username:' + data);
      });

  }

}
