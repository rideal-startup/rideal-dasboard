import { Coordinates } from './coordinates';

export class Stop {
    name: string;
    location: Coordinates;
    waitTime: number;
    order: number;
}