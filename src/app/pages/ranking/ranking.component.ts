import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/domain/user';
import { IfStmt } from '@angular/compiler';

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

  public ranking: User[] = [];
  public winners: User[] = [];
  
  /* = [
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
  ];*/

  public filteredRanking = [];

  constructor(private userService:UserService) {
    userService.getFirstTenRankingUsers().subscribe(
      res => {
        this.ranking = res;

        let sliceLimit = 3;
        if (res.lenght < 3) { sliceLimit = res.lenght; }
        this.winners = res.slice(0, sliceLimit);

        this.filterRanking();
      }
    );
  }

  ngOnInit() {
    this.filteredRanking =
      this.ranking
          .filter(r => r.city.name === this.selected);
  }

  filterRanking() {
    this.filteredRanking =
        this.ranking
            .filter(r => r.city.name === this.selected);
  }
}
