import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReinsType } from '../VO/reinsType';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ReinsTypeService {

  private reinsTypeURL = '/assets/mock-data/reins-type.json';
  constructor(private httpClient: HttpClient) { }

  getReinsTypes(): Observable<ReinsType[]> {
    return this.httpClient.get<ReinsType[]>(this.reinsTypeURL);
  }

  addReinsType(reinsType: ReinsType): Observable<ReinsType> {
    return this.httpClient.post<ReinsType>(this.reinsTypeURL,reinsType);
  }

  deleteReinsType(reinsType: ReinsType| string): Observable<ReinsType> {
    const id = typeof reinsType === 'string' ? reinsType : reinsType.typeId;
    const url = `${this.reinsTypeURL}/${id}`;
    return this.httpClient.delete<ReinsType>(url, httpOptions);
  }
}
