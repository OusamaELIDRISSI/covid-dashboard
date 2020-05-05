import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://morocco-covid.herokuapp.com/api/all');
  }

  getDataByStatus(status: string): Observable<any> {
    const Url = 'https://api.covid19api.com/dayone/country/morocco/status/' + status;
    return this.http.get(Url);
  }
}
