import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-line-form',
  templateUrl: './line-form.component.html',
  styleUrls: ['./line-form.component.scss']
})
export class LineFormComponent implements OnInit {

  hexaColor:string = "#BC9166";
  linePoints:mapPoint[] = [
    new mapPoint(41.689426, 0.722586)
    ,new mapPoint(11.689426, 0.422586)
  ];

  isCircular:boolean = false;
 movies = [
  'Episode I - The Phantom Menace',
  'Episode II - Attack of the Clones',
  'Episode III - Revenge of the Sith',
  'Episode IV - A New Hope',
  'Episode V - The Empire Strikes Back',
  'Episode VI - Return of the Jedi',
  'Episode VII - The Force Awakens',
  'Episode VIII - The Last Jedi'
];
  constructor() {}

  ngOnInit() {}


  public addStation(){
    this.linePoints.push(new mapPoint(11.689426, 0.422586))
  }

  public deletStation( index:number) {
    this.linePoints.slice(index,index);
  }

  dropPoint(event: CdkDragDrop<mapPoint[]>) {
    moveItemInArray(this.linePoints, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}

// tslint:disable-next-line: no-unused-expression
class mapPoint {
  public latitude: number;
  public longitude: number;

  constructor(latitude: number, longitude: number){
    this.latitude = latitude;
    this.longitude = longitude;
    }
}
