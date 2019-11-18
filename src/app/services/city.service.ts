import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../domain/city';
import { map } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs/internal/types';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  private getEmbedded(): OperatorFunction<any, City[]> {
    return map((r: any) => r._embedded.cities);
  }

  public findAll(): Observable<City[]> {
    return this.http.get(`${environment.API_BASE_URL}/cities`).pipe(
      this.getEmbedded()
    );
  }
}
