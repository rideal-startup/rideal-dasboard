import { CityService } from './../../services/city.service';
import { LineService } from './../../services/lineservice.service';
import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/domain/line';
import { City } from 'src/app/domain/city';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-fleet-managment',
  templateUrl: './fleet-managment.component.html',
  styleUrls: ['./fleet-managment.component.scss']
})
export class FleetManagmentComponent implements OnInit {

  emptyLine =  {
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
    routeType: 'CIRCULAR',
    stops : [],
  } as Line;

  public cities: City[];
  public lines: Line[];
  public selectedLine: Line = null;
  public loadingLines = true;
  public createMode = false;

  public message: {type?: string, msg?: string} = {};

  constructor(
    private lineService: LineService,
    private cityService: CityService) { }

  ngOnInit() {
    const requests$ = [
      this.cityService.findAll(),
      this.lineService.findAll()
    ];

    forkJoin(requests$).subscribe(
      res => {
        this.cities = res[0] as City[];
        this.lines = res[1] as Line[];
        this.selectedLine = this.lines[0];
        this.loadingLines = false;
      }
    );
  }

  public setCreateLineMode() {
    this.selectedLine = new Line(this.emptyLine);
    this.createMode = true;
  }

  public selectLine(line: Line) {
    this.createMode = false;
    this.selectedLine = line;
  }

  public submit() {
    const request$ = this.createMode
      ? this.lineService.create(this.selectedLine)
      : this.lineService.update(this.selectedLine);
    request$.subscribe(res => {
      this.message = {
        type: 'SUCCESS',
        msg: `Line ${this.createMode ? 'created' : 'updated'} successfully`
      };
    }, error => {
      console.log(error);
      this.message = {
        type: 'ERROR',
        msg: `Error ${this.createMode ? 'creating' : 'updating'} the line`
      };
    });
    setTimeout(() => this.message = null, 3000);
  }
}



