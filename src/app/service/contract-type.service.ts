import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContractType } from '../VO/contractType';

@Injectable({
  providedIn: 'root'
})
export class ContractTypeService {

  constructor(private httpClient: HttpClient) { }

  getContractTypes(): Observable<ContractType[]> {
    return this.httpClient.get<ContractType[]>('http://localhost:8080/contractType/getAll');
  }
}
