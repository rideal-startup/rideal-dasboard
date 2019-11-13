import { Component, OnInit } from '@angular/core';

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

  public winners = [
    {
      username: 'Sebé',
      points: 1341,
      prize: 'The prize name'
    },
    {
      username: 'Jervas',
      points: 25234,
      prize: 'The prize name'
    },
    {
      username: 'Guirado.ino',
      points: 26565,
      prize: 'The prize name'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
