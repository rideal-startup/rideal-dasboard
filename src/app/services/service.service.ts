
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { InjectorInstance } from '../app/app.module';
import { Observable } from 'rxjs';
import { ResolveEnd } from '@angular/router';
import { environment } from '../environments/environment';
import { reject } from 'q';
import { Injectable } from '@angular/core';
import { CompileTemplateMetadata } from '@angular/compiler';

//import { requestOptions } from '../assets/models/headers';
//import { HttpHeaders } from '@angular/common/http';

const HeadG = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json'
  }
  
  export const requestOptions = {
    headers : new HttpHeaders(HeadG),
  }

@Injectable()
export class Service {

    requestOpt = requestOptions;

  constructor(private http: HttpClient) {}

  /**
   *  FLEET MANAGMENT CALLS
   */
  public getLine(id: string): Observable<any> {
    return this.http.get<any>(environment.API_BASE_URL + environment.API_LINES_URL + "?recordId=" + id,  this.requestOpt);
  }
  public createLine(line: Object): Observable<any> {
    return this.http.post<any>(environment.API_BASE_URL + environment.API_LINES_URL, line,  this.requestOpt);
  }
  public updateLine(line: Object): Observable<any> {
    return this.http.put<any>(environment.API_BASE_URL + environment.API_LINES_URL, line,  this.requestOpt);
  }
  public deleteLine(id: string): Observable<any> {
    return this.http.delete<any>(environment.API_BASE_URL + environment.API_LINES_URL+ "?recordId=" + id,  this.requestOpt);
  }



  /* EXAMPLE CALLS */
  public sendRequest(): Observable<any> {
    return this.http.post<any>(environment.API_BASE_URL + environment.API_SEND_REPORT_URL, "requestBody", this.requestOpt); // /fake3
  }

  public loadRecord(componentID: string, id: string) {
    return this.http.get<any>(environment.API_BASE_URL + environment.API_GET_RECORD_BY_ID_URL + "?recordId=" + id + "&elementType=" + componentID , this.requestOpt);
  }




}