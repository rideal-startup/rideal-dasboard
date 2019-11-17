import { AuthenticationBasicService } from 'src/app/services/authentication-basic.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OperatorFunction } from 'rxjs/internal/types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Challenge } from '../domain/challenge';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(
    private http: HttpClient,
    private auth: AuthenticationBasicService) { }

  private getEmbedded(): OperatorFunction<any, Challenge[]> {
    return map((r: any) => r._embedded.challenges);
  }

  public findAll(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(`${environment.API_BASE_URL}/challenges`);
  }

  public delete(id: string) {
    return this.http.delete(`${environment.API_BASE_URL}/challenges/${id}`);
  }

  public create(challenge: Challenge): Observable<Challenge> {
    const challengeBody = challenge as any;
    if (challenge.city) {
      challengeBody.city = '/cities/' + challenge.city.id;
    }
    challengeBody.company = '/companies/' + this.auth.getCurrentUser().id;

    return this.http.post<Challenge>(`${environment.API_BASE_URL}/challenges`, challengeBody).pipe(
      map(res => { console.log(res); return res; }
      )
    );
  }
}
