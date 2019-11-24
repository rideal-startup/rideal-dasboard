import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private stompClient;
  private message: BehaviorSubject<string> = new BehaviorSubject('');
  private messageContent: string;

  constructor() { }

  initializeWebSocketConnection() {
    const ws = new SockJS(environment.SOCKET_URL);
    this.stompClient = Stomp.over(ws);
    this.stompClient.debug = true;

    this.stompClient.connect({}, (a) => {
      console.log(a);
      this.stompClient.subscribe('/chat', (m) => {
        this.message.next(JSON.parse(m.body));
      });
    });
    return this.message;
  }
}
