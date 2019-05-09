import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../VO/company';

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
  deleteUrl = 'http://localhost:8080/company/deleteById';
  modifyUrl = 'http://localhost:8080/company/modifyById';
  header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
  constructor(private http: HttpClient) { }

  getCompanyMessages(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyURL + '/getAll');
  }

  /** Get: search Company by id */
  getCompanyById(companyId: any): Observable<Company> {
    return this.http.get<Company>(`${this.company}/${companyId}`);
  }

  /** PUT: modify the Company on the server */
  updateCompany(company: Company): Observable<any> {
    // const url = `${this.modifyUrl}/${companyId}`;
    return this.http.put<Company>(this.modifyUrl, company, httpOptions);
  }

  /** delete the company from the server */
  deleteCompany(companyId: any): Observable<any> {
    const url = `${this.deleteUrl}/${companyId}`;
    return this.http.delete(url, httpOptions);
  }

  /** add company massage */
  addCompany(company: Company): Observable<any> {
    return this.http.post<Company>(this.companyURL + '/add', company);
  }

  getCompanyAccountByCompanyName(companyName: string): Observable<any> {
    return this.http.get<Company>(this.companyURL + '/getCompanyAccount/' + companyName)
  }
}
