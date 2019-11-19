import { RouteTypeEnum } from './route-type-enum';
import { Stop } from './stop';
import { City } from './city';
import { User } from './user';

export enum TransportationModeEnum {
  TRAIN = 'TRAIN',
  BUS = 'BUS',
  METRO = 'METRO',
}

export class Line {
  id: string;
  available: boolean;
  length: number;
  onFreeDays: boolean;
  name: string;
  color: string;
  city: City;
  routeType: RouteTypeEnum;
  stops: Stop[];
  company: User;
  transportationMode: TransportationModeEnum;

  constructor(json: any) {
    this.name = json.name;
    this.id = json.id;
    this.available = json.available;
    this.length = json.length;
    this.onFreeDays = json.onFreeDays;
    this.color = json.color;
    this.routeType = json.routeType;
    this.city = json.city;
    this.company = json.company;
    this.stops = json.stops;
    this.transportationMode = json.transportationMode;
  }

  public toJson() {
    return {
      name: this.name,
      id: this.id,
      available: this.available,
      length: this.length,
      onFreeDays: this.onFreeDays,
      color: this.color,
      routeType: this.routeType,
      city: '/cities/' + this.city.id,
      company : '/companies/' +  this.company.id,
      stops: this.stops.map(s => ({ name: s.name, location: s.location, waitTime: s.waitTime, order: s.order})),
      transportationMode: this.transportationMode
    };
  }
}
