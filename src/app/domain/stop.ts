import { Coordinates } from './coordinates';

export class Stop {
    name: string;
    location: Coordinates;
    waitTime: number;
    order: number;
    marker: any; // Need to remove

    constructor(name: string, location: Coordinates, waitTime: number, order: number, marker: any) {
        this.name = name;
        this.location = location;
        this.waitTime = waitTime;
        this.order = order;
        this.marker = marker;
    }
}
