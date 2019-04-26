import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../VO/company';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private customersUrl = 'http://localhost:8080/api/test';

  constructor(private http: HttpClient) { }

  test(id: any): Observable<Company> {
    return this.http.get<Company>(`${this.customersUrl}/${id}`);
  }

}
