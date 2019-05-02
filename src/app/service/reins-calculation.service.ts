import { Injectable } from '@angular/core';
import { CalculateData } from '../VO/calculateData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReinsCalculationService {

  constructor(private httpClient: HttpClient) { }

  addCalculateData(data: CalculateData): Observable<any> {
    return this.httpClient.post<CalculateData>('http://localhost:8080/calculateData/add',data);
  }
}
