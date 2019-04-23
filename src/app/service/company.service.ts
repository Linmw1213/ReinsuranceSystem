import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../VO/company';
import { Header } from 'primeng/components/common/shared';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = "http://localhost:8080/api/test";
  header = new HttpHeaders({ 'content-type': 'application/json' });
  constructor(private http: HttpClient) { }

  getCompanyMessages(): Observable<Company[]> {
    return this.http.get<Company[]>('/assets/mock-data/company.json');
    // return this.http.get<Company[]>('http://localhost:8080/api/test');
  }

  test(username: String) {
     this.http.post(this.url, username, { headers: this.header, responseType: 'text'})
    .subscribe(data => {
      console.log('username:' + data);
    });
    return false;

  }
}
