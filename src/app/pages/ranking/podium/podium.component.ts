import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.scss']
})
export class PodiumComponent implements OnInit {

  public COLORS = [
    '#D4AF37',
    '#cacaca',
    '#cd7f32',
  ];

  @Input() public winners: User;

  constructor() { }

  ngOnInit() {
  }

}
