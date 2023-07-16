import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  getSession(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/session');
  }

  login(params: any): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/login', params);
  }

  logout(): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + '/logout');
  }

}
