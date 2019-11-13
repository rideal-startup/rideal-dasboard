import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public selected = 'Lleida';
  public cities = [
    'Lleida',
    'Barcelona'
  ];

  public ranking = [
    {
      name: 'Test',
      city: 'Lleida',
      points: 127
    },
    {
      name: 'Test1',
      city: 'Barcelona',
      points: 127
    },
    {
      name: 'Test3',
      city: 'Lleida',
      points: 127
    }
  ];

  public filteredRanking = [];

  constructor() { }

  ngOnInit() {
    this.filteredRanking =
      this.ranking
          .filter(r => r.city === this.selected);
  }

  filterRanking() {
    this.filteredRanking =
        this.ranking
            .filter(r => r.city === this.selected);
  }
}
