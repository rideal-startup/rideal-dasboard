import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl, SelectMultipleControlValueAccessor } from '@angular/forms';

import { DndDropEvent } from 'ngx-drag-drop';
import { ThemeService } from 'src/app/services/theme.service';

declare const google: any;


@Component({
  selector: 'app-line-form',
  templateUrl: './line-form.component.html',
  styleUrls: ['./line-form.component.scss']
})
export class LineFormComponent implements OnInit {
  hexaColor: string = "#BC9166";

  sidebarColor: any = "blue";

  fullMapMode = false;
  map: any;
  currentId = 2;

  linePoints: mapPoint[] = [
    new mapPoint(1, "Los Santos", 41.689426, 20.722586, null),
    new mapPoint(2, "S.Andreas", 30.689426, 10.422586, null)
  ];

  isCircular: boolean = false;

  constructor(
    private themeService: ThemeService
  ) {
    themeService.sidebarColor.subscribe(sidebarColor =>{
      this.sidebarColor = sidebarColor;
      this.changeSidebarColor(sidebarColor);
    });
    themeService.mainPanelColor.subscribe(mainPanelColor => {
      this.changeDashboardColor(mainPanelColor);
    }
      );


  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.mapSetUp();
  }

  public addStation() {

    this.currentId += 1;
    this.linePoints.push(new mapPoint(this.currentId, "", null, null,
      null
    ));
    const that = this;
    //this.linePoints[this.linePoints.length - 1].marker.setMap(this.map);
    setTimeout(function(){ that.changeSidebarColor(that.sidebarColor); }, 50);
  }

  public deletStation(index: number) {
    if(this.linePoints[index].marker != null){this.linePoints[index].marker.setMap(null);}
    this.linePoints.splice(index, 1);
  }

  dropPoint(event: CdkDragDrop<mapPoint[]>) {
    moveItemInArray(this.linePoints, event.previousIndex, event.currentIndex);
  }

  /**
   * MAP ZONE
   * 
   */

  mapSetUp() {

    var myLatlng = new google.maps.LatLng(41.689426, 20.722586);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8ec3b9"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1a3646"
        }]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#4b6878"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#64779e"
        }]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#4b6878"
        }]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#334e87"
        }]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
          "color": "#023e58"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#283d6a"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6f9ba5"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#023e58"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3C7680"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#304a7d"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#98a5be"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2c6675"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#9d2a80"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#9d2a80"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#b0d5ce"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#023e58"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#98a5be"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#283d6a"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3a4762"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#0e1626"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#4e6d70"
        }]
      }
      ]
    };

    this.map = new google.maps.Map(document.getElementById("fleetMap"), mapOptions);

    this.refreshMapMarkers();
  }

  public refreshMapMarkers() {
    console.log("Refresh!");

    this.linePoints.forEach(item => {
      //item.marker.setMap(null);
      if (item.marker != null) { item.marker.setMap(null); }
      item.marker = null;
      console.log(item.id + "item.latitude: " + item.lat);
      console.log(item.id + "item.longitude: " + item.lng);
      item.marker = new google.maps.Marker({
        position: new google.maps.LatLng(item.lat, item.lng),
        title: item.name
      });

      item.marker.setMap(this.map);
    });
  }

  public setCreateLineMode() {
    console.log("setCreateLineMode");
    this.fullMapMode = true;
  }

  public loadLine(id: string) {
    console.log("setCreateLineMode");
    this.fullMapMode = false;
  }

  public changeSidebarColor(color) {
    const exampleBoxList: any = document.getElementsByClassName('example-box');

    for (let exampleBox of exampleBoxList) {
      if (exampleBox != undefined) {
        exampleBox.setAttribute('data', color);
      }
    }
  }

  public changeDashboardColor(color) {
    const exampleList = document.getElementsByClassName('example-list')[0];

    if (exampleList != undefined) {
      exampleList.setAttribute('info', color);
    }
  }
}


// tslint:disable-next-line: no-unused-expression
class mapPoint {
  public id: number
  public name: string
  public lat: number;
  public lng: number;
  public marker: any;

  constructor(id: number, name: string, lat: number, lng: number, marker: any) {
    this.name = name;
    this.id = id;
    this.lat = lat;
    this.lng = lng;
    this.marker = marker;
  }
}
