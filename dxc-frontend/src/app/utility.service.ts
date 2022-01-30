import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  public retrieveAPI(endpoint: string, payload?: []) {
   return this.http.get(`${this.url}${endpoint}`).subscribe(res => {
     console.log(`res: ${res}`);
   });
  }
}
