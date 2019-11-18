import { User } from './user';
import { City } from './city';
import { Prize } from './prize';

export enum UnitEnum {
  KM = 'KM',
  TIMES = 'TIMES',
  MIN = 'MIN'
}

export class Challenge {
  id?: string;
  name: string;
  description: string;
  goal: number;
  difficulty: string;
  unit: UnitEnum;
  duration: number;
  prize: Prize;
  city: City;
  company?: User;
}
