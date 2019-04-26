import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../VO/company';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  mockDataURL = '/assets/mock-data/company.json';
  companyURL = 'http://localhost:8080/company';
  company = 'http://localhost:8080/company/getById';
  header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getCompanyMessages(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyURL + '/getAll');
  }

  /** Get: search Company by id */
  getCompanyById(companyId: any): Observable<Company> {
    return this.http.get<Company>(`${this.company}/${companyId}`);
  }

  /** PUT: modify the Company on the server */
  updateCompany(Company: Company): Observable<Company> {
    return this.http.put<Company>(this.mockDataURL, Company, httpOptions);
  }

  /** delete the company from the server */
  deleteCompany(Company: Company | string): Observable<Company> {
    const id = typeof Company === 'string' ? Company : Company.companyId;
    const url = `${this.mockDataURL}/${id}`;
    return this.http.delete<Company>(url, httpOptions)
  }
}
