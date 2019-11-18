import { Challenge } from 'src/app/domain/challenge';
import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-challenges',
  templateUrl: './list-challenges.component.html',
  styleUrls: ['./list-challenges.component.scss']
})
export class ListChallengesComponent implements OnInit, OnChanges {

  @Input() public challenges: Challenge[] = [];
  @Output() public clickDelete = new EventEmitter<Challenge>();

  public challengesDuration: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  delete(challenge: Challenge) {
    this.clickDelete.emit(challenge);
  }

  private computeDuration(c: Challenge) {
    const toInt = (n: number) => Math.floor(n);

    const seconds = c.duration;
    const minutes = toInt(seconds / 60) % 60;
    const hours = toInt(seconds / 3600) % 24;
    const days = toInt(seconds / (86400)) % 7;
    const weeks = toInt(seconds / (6048000)) % 4;
    const months = toInt(seconds / (25920000));

    let res = '';
    if (months > 0) {
      res += months + ' Months ';
    }
    if (weeks > 0) {
      res += weeks + ' Weeks ';
    }
    if (days > 0) {
      res += days + ' Days ';
    }
    if (hours > 0) {
      res += hours + ' Hours ';
    }
    if (minutes > 0) {
      res += minutes + ' Minutes ';
    }
    return res;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.challenges.firstChange) {
      this.challengesDuration = this.challenges.map(this.computeDuration);
    }
  }

}
