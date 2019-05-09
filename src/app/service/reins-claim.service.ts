import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReinsClaim } from '../VO/reinsClaim';
import { Contract } from '../VO/contract';

@Injectable({
  providedIn: 'root'
})
export class ReinsClaimService {
  private reinsClaimURL = '/assets/mock-data/reins-claim.json';
  private reinsClaimUrl = 'http://localhost:8080/reinsClaim';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ReinsClaim[]> {
    return this.httpClient.get<ReinsClaim[]>(this.reinsClaimUrl+'/getAll');
  }

  delete(reinsClaim: ReinsClaim): Observable<any> {
    return this.httpClient.delete<ReinsClaim>(this.reinsClaimUrl+'/delete/'+reinsClaim.claimCode);
  }

  addReinsClaim(reinsClaim: ReinsClaim): Observable<any> {
    return this.httpClient.post<ReinsClaim>(this.reinsClaimUrl+'/add',reinsClaim);
  }

  getContractId(): Observable<any>{
    return this.httpClient.get<any>(this.reinsClaimUrl+'/getContractId');
  }
}
