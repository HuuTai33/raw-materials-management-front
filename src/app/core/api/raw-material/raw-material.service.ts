import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RawMaterialService {

  constructor(private httpClient: HttpClient) { }

  getRawMaterials(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/raw_materials');
  }

  getRawMaterial(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/raw_materials/' + id);
  }

  createRawMaterial(params: any): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/raw_materials', params);
  }

  updateRawMaterial(id: number, params: any): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/raw_materials/' + id, params);
  }

  deleteRawMaterial(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + '/raw_materials/' + id);
  }

}
