import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReinsClaim } from '../VO/reinsClaim';

@Injectable({
  providedIn: 'root'
})
export class ReinsClaimService {
  private reinsClaimURL = '/assets/mock-data/reins-claim.json';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ReinsClaim[]> {
    return this.httpClient.get<ReinsClaim[]>(this.reinsClaimURL);
  }

  delete(reinsClaim: ReinsClaim): Observable<ReinsClaim> {
    return this.httpClient.delete<ReinsClaim>(this.reinsClaimURL);
  }

  addReinsClaim(reinsClaim: ReinsClaim): Observable<ReinsClaim> {
    return this.httpClient.post<ReinsClaim>(this.reinsClaimURL,reinsClaim);
  }
}
