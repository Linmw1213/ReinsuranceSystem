import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private customersUrl = 'http://localhost:8080/api/test';
  
  constructor(private http: HttpClient) { }

  test(username: String) {

    const body = { username: username };
     

    this.http.post(this.customersUrl, username,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),
        responseType: 'text'
      }).subscribe(data => {
        console.log('username:' + data);
      });

  }
}
