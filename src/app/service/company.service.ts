import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from '../VO/company';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = "http://localhost:8080/";
  companyUrl = '/assets/mock-data/company.json';
  header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getCompanyMessages(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  /** Get: search Company by id */
  getCompanyById(id: any): Observable<Company> {
    const url = `${this.companyUrl}/${id}`;
    return this.http.get<Company>(url);
  }

  /** PUT: modify the Company on the server */
  updateCompany(Company: Company): Observable<any> {
    return this.http.put(this.companyUrl, Company, httpOptions);
  }

  /** delete the company from the server */
  deleteCompany(Company: Company | string): Observable<Company> {
    const id = typeof Company === 'string' ? Company : Company.companyId;
    const url = `${this.companyUrl}/${id}`;
    return this.http.delete<Company>(url, httpOptions)
  }
}
