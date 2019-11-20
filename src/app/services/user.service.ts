import { AuthenticationBasicService } from 'src/app/services/authentication-basic.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OperatorFunction } from 'rxjs/internal/types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Challenge } from '../domain/challenge';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private auth: AuthenticationBasicService) { }

// http://localhost:8080/api/users?pageSize=3&pageNo=0&sortBy=points&order=ASC

  public getFirstTenRankingUsers(): Observable<any> {
    return this.http.get(`${environment.API_BASE_URL}/users?pageSize=10&pageNo=0&sortBy=points&order=DESC`);
  }


}
