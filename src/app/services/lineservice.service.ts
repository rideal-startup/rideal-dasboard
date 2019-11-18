import { AuthenticationBasicService } from 'src/app/services/authentication-basic.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Line } from '../domain/line';
import { City } from '../domain/city';
import { map } from 'rxjs/operators';

const HeadG = {
  Accept : 'application/json',
  'Content-Type' : 'application/json'
};

export const requestOptions = {
  headers : new HttpHeaders(HeadG),
};

@Injectable()
export class LineService {

  requestOpt = requestOptions;

  constructor(
    private http: HttpClient,
    private auth: AuthenticationBasicService) {}

  /**
   *  FLEET MANAGMENT CALLS
   */
  public findAll(): Observable<Line[]> {
    return this.http.get<any>(`${environment.API_BASE_URL}/lines/`,  this.requestOpt);
  }

  public get(id: string): Observable<any> {
    return this.http.get<any>(`${environment.API_BASE_URL}/lines/${id}`,  this.requestOpt);
  }

  public create(line: Line): Observable<any> {
    const lineBody = new Line(line).toJson();
    lineBody.company = '/companies/' + this.auth.getCurrentUser().id;
    lineBody.city = '/cities/' + line.city.id;
    return this.http.post<City>(`${environment.API_BASE_URL}/lines`,
      lineBody, this.requestOpt);
  }

  public update(line: Line): Observable<any> {
    line = new Line(line);
    return this.http.put<any>(`${environment.API_BASE_URL}/lines/${line.id}`,
      line.toJson(), this.requestOpt);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.API_BASE_URL}/lines/${id}`,  this.requestOpt);
  }
}
