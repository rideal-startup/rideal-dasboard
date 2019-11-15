import {Authority} from './authority';
import { City } from './city';

export class User {
  id: string;
  username: string;
  name: string; // enterprice
  city: City;
  adress: string;
  email: string;
  _links: any = {};
  authorization: string;
  password = '';
}
