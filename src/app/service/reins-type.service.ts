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

  private reinsTypeURL = 'http://localhost:8080/reinsType';

  constructor(private httpClient: HttpClient) { }

  getReinsTypes(): Observable<ReinsType[]> {
    return this.httpClient.get<ReinsType[]>(this.reinsTypeURL + '/getAll');
  }

  addReinsType(reinsType: ReinsType): Observable<any> {
    return this.httpClient.post<ReinsType>(this.reinsTypeURL + '/add', reinsType);
  }

  deleteReinsType(reinsType: ReinsType | string): Observable<any> {
    const id = typeof reinsType === 'string' ? reinsType : reinsType.typeId;
    const url = `${this.reinsTypeURL + '/delete'}/${id}`;
    return this.httpClient.delete<ReinsType>(url, httpOptions);
  }
}
