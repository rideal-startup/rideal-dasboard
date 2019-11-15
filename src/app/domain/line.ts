import { RouteTypeEnum } from './route-type-enum';
import { Stop } from './stop';
import { City } from './city';

export class Line {
    id: string;
    available: boolean;
    length: number;
    onFreeDays: boolean;
    name: string;
    color: string; // Hexadecimal color code
    city: City;
    routeType: RouteTypeEnum;
    stops: Stop[];
}