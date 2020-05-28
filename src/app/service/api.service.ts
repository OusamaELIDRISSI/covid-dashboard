import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_COVID_MOROCCO, API_COVID19 } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(API_COVID_MOROCCO);
  }

  getDataByStatus(status: string): Observable<any> {
    const Url = API_COVID19 + status;
    return this.http.get(Url);
  }
}
