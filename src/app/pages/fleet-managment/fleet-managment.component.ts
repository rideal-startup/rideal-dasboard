import { Component, OnInit } from "@angular/core";
import { LineFormComponent } from './line-form/line-form.component';

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

  lineSelected: Object;

  displayInfo = false;

  constructor() { }

  ngOnInit() {}

  public setCreateLineMode() {
    console.log("setCreateLineMode");
    this.displayInfo = true;
  }

  public loadLine(id:string) {
    //lineSelected = HTTTP GET
    console.log("setCreateLineMode");
    this.displayInfo = true;
  }

}



