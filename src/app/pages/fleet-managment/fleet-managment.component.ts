import { MapComponent } from './../map/map.component';
import { LineService } from './../../services/lineservice.service';
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

  public lines: Line[];
  public loadingLines = true;
  public selectedLine: Line = null;

  constructor(private lineService: LineService) { }

  ngOnInit() {
    this.lineService.getLineList().subscribe(
      lines => {
        this.lines = lines;
        this.selectedLine = lines[0];
        this.loadingLines = false;
      }
    );
  }

  public setCreateLineMode() {
    console.log('setCreateLineMode');
    this.lineSelected = this.empty_lineSelected;
    this.displayInfo = true;
  }

  public selectLine(line: Line) {
    this.selectedLine = line;
  }

  public loadLine(id: string) {
    // TODO: lineSelected = HTTTP GET
    console.log('setCreateLineMode');
    this.lineSelected = this.filled_lineSelected;
    this.displayInfo = true;
  }

}



