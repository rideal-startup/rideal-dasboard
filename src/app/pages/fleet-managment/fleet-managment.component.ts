import { CityService } from './../../services/city.service';
import { LineService } from './../../services/lineservice.service';
import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/domain/line';
import { City } from 'src/app/domain/city';
import { forkJoin } from 'rxjs';
import { AuthenticationBasicService } from 'src/app/services/authentication-basic.service';


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
    transportationMode: null,
    stops : [],
  } as Line;

  public cities: City[];
  public lines: Line[];
  public selectedLine: Line = null;
  public loadingLines = true;
  public createMode = false;
  public lineSelected = false;

  public message: {type?: string, msg?: string} = {};

  constructor(
    private lineService: LineService,
    private cityService: CityService,
    private auth: AuthenticationBasicService) { }

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
    this.lineSelected = true;
    this.createMode = true;
  }

  public selectLine(line: Line) {
    this.createMode = false;
    this.lineSelected = true;
    this.selectedLine = line;
  }

  public submit() {
    if (!this.checkIfAllInputsComplete(this.selectedLine)) { return; }
    this.selectedLine.company = this.auth.getCurrentUser();

    const request$ = this.createMode
      ? this.lineService.create(this.selectedLine)
      : this.lineService.update(this.selectedLine);
    request$.subscribe(res => {

      if (this.createMode) {
        this.lines.unshift(res);
        this.lineSelected = false;
      }

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

  public delete() {
    this.selectedLine.company = this.auth.getCurrentUser();

    const request$ =
    this.lineService.delete(this.selectedLine.id);
    request$.subscribe(res => {
      this.lineSelected = false;
      this.lines.forEach((line, index) => {
        if (line.id === this.selectedLine.id) {
          this.lines.splice(index, 1);
        }
      });
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


  private checkIfAllInputsComplete(line: Line): boolean {

    let errrorFound = false;
    if (!this.validateInput(line.available)) {return; }
    if (!this.validateInput(line.length)) {return; }
    if (!this.validateInput(line.onFreeDays)) {return; }
    if (!this.validateInput(line.name)) {return; }
    if (!this.validateInput(line.color)) {return; }
    if (!this.validateInput(line.city)) {return; }

    if (!this.validateInput(line.routeType)) {return; }
    if (!this.validateInput(line.stops)) {return; } else {
      line.stops.forEach( (stop) => {
        if (!this.validateInput(stop.name)) { errrorFound = true; return; }
        if (!this.validateInput(stop.location)) { errrorFound = true; return; } else {
          if (!this.validateInput(stop.location.lat)) { errrorFound = true; return; }
          if (!this.validateInput(stop.location.lng)) { errrorFound = true; return; }
        }
      });
    }
    if (errrorFound) {return; }
    if (!this.validateInput(line.transportationMode)) {return; }

    return true;
  }

  private validateInput(atribute: any) {
    if (atribute === undefined || atribute === null) {
      this.message = {type: 'ERROR', msg: `Not all the inputs are filled.`};
      return false;
    }
    return true;
  }
}



