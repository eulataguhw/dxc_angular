import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private url = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  public retrieveAPI(type: string, endpoint: string, payload?: Object) {
   return new Promise((resolve, reject) => { 
     let criterias = '?';
     for (let criteria in payload) {
      criterias = `${criterias}${criteria}=${criteria}`
     }
    this.http.get(`${this.url}/${type}/${endpoint}`, this.httpOptions)
    .pipe(take(1))
    .subscribe( {next: (resp) => resolve(resp), error: (e) => reject(alert(e?.error?.message))});
  });
  }

  public async submitAPI(type: string, endpoint: string, payload: Object): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/${type}/${endpoint}`, payload, this.httpOptions)
      .pipe(take(1))
      .subscribe( {next: (resp) => resolve(resp), error: (e) => reject(endpoint === 'signin' ? alert(`Invalid User or Password`) : alert(e?.error?.message))});
    });
  }
  
}
