import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReinsType } from '../VO/reinsType';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReinsTypeService {

  private reinsTypeURL = '/assets/mock-data/reins-type.json';
  constructor(private httpClient: HttpClient) { }

  getReinsTypes(): Observable<ReinsType[]> {
    return this.httpClient.get<ReinsType[]>(this.reinsTypeURL);
  }
}
