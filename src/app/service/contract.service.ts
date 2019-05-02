import { Injectable } from '@angular/core';
import { Contract } from '../VO/contract';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CalculateData } from '../VO/calculateData';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private ContractesUrl = '/assets/mock-data/contract.json';
  private contractURL = 'http://localhost:8080/contract';
  constructor(private http: HttpClient) { }

  getContractMessages(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.contractURL+'/getAll');
  }
  
  addContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(this.ContractesUrl, contract, httpOptions);
  }

  modifyContract(contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(this.ContractesUrl, contract, httpOptions);
  }

  deleteContract(Contract: Contract | string): Observable<Contract> {
    const id = typeof Contract === 'string' ? Contract : Contract.contractId;
    const url = `${this.ContractesUrl}/${id}`;
    return this.http.delete<Contract>(url, httpOptions);
  }
}
