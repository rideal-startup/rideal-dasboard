import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  sidebarColor: BehaviorSubject<string> = new BehaviorSubject('red');
  mainPanelColor: BehaviorSubject<string> = new BehaviorSubject('black-content');

  constructor() { }
}
