
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Line } from '../domain/line';

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

  constructor(private http: HttpClient) {}

  /**
   *  FLEET MANAGMENT CALLS
   */
  public getLineList(): Observable<Line[]> {
    return this.http.get<any>(`${environment.API_BASE_URL}/lines/`,  this.requestOpt);
  }

  public getLine(id: string): Observable<any> {
    return this.http.get<any>(`${environment.API_BASE_URL}/lines/${id}`,  this.requestOpt);
  }

  public createLine(line: Line): Observable<any> {
    return this.http.post<any>(`${environment.API_BASE_URL}/lines`, line,  this.requestOpt);
  }

  public updateLine(line: Line): Observable<any> {
    return this.http.put<any>(`${environment.API_BASE_URL}/lines`, line,  this.requestOpt);
  }

  public deleteLine(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.API_BASE_URL}/lines/${id}`,  this.requestOpt);
  }
}
