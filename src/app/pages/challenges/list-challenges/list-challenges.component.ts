import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-challenges',
  templateUrl: './list-challenges.component.html',
  styleUrls: ['./list-challenges.component.scss']
})
export class ListChallengesComponent implements OnInit {
  public challenges = [
    {
      name: '100 km Ridealed',
      description: 'Complete one hundred kilometers with Rideal',
      difficulty: 'silver',
      prize: 'kakyOFoQ136aCyAlY6xq'
    },
    {
      name: '100 km Ridealed',
      description: 'Complete one hundred kilometers with Rideal',
      difficulty: 'gold',
      prize: 'kakyOFoQ136aCyAlY6xq'
    },
    {
      name: '100 km Ridealed',
      description: 'Complete one hundred kilometers with Rideal',
      difficulty: 'bronze',
      prize: 'kakyOFoQ136aCyAlY6xq'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
