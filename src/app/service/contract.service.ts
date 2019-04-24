import { Injectable } from '@angular/core';
import { Contract } from '../VO/contract';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  getContractMessages(): Observable<Contract[]> {
    return this.http.get<Contract[]>('/assets/mock-data/contract.json');
  }
}
