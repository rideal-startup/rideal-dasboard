import { Component, OnInit } from '@angular/core';
import { LineFormComponent } from './line-form/line-form.component';
import { Line } from 'src/app/domain/line';
import { Stop } from 'src/app/domain/stop';
import { City } from 'src/app/domain/city';
import { Coordinates } from 'src/app/domain/coordinates';
import { RouteTypeEnum } from 'src/app/domain/route-type-enum';

declare const google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: 'app-fleet-managment',
  templateUrl: './fleet-managment.component.html',
  styleUrls: ['./fleet-managment.component.scss']
})
export class FleetManagmentComponent implements OnInit {

  lineSelected: Line;
  filled_lineSelected =  {
    id: '1',
    available: true,
    length: 4,
    onFreeDays: true,
    name: ' Linia 1',
    color: '#FF1111', // Hexadecimal color code
    city: {
      id: '1',
      name: 'Lleida',
      country: 'Catalunya',
      postalCode: '25690',
    },
    routeType: RouteTypeEnum.CIRCULAR,
    stops : [
      {
        name: 'Los Santos',
        location: {
          lat: 41.689426,
          long: 20.722586,
        } as Coordinates,
        waitTime: 11,
        order: 1,
      } as Stop,
      {
        name: 'S.Andreas',
        location: {
          lat: 30.689426,
          long: 10.422586,
        } as Coordinates,
        waitTime: 11,
        order: 2,
      } as Stop,
    ],
  } as Line;

  empty_lineSelected =  {
    id: '1',
    available: true,
    length: 4,
    onFreeDays: true,
    name: '',
    color: '#111111', // Hexadecimal color code
    city: {
      id: '',
      name: '',
      country: '',
      postalCode: '',
    },
    routeType: null,
    stops : [],
  } as Line;

  displayInfo = false;

  constructor() { }

  ngOnInit() {}

  public setCreateLineMode() {
    console.log('setCreateLineMode');
    this.lineSelected = this.empty_lineSelected;
    this.displayInfo = true;
  }

  public loadLine(id: string) {
    // TODO: lineSelected = HTTTP GET
    console.log('setCreateLineMode');
    this.lineSelected = this.filled_lineSelected;
    this.displayInfo = true;
  }

}



