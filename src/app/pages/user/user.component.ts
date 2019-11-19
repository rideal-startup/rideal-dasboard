import { Component, OnInit } from "@angular/core";
import { User } from 'src/app/domain/user';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {

  user: User = {
    id: "1",
    username: "JuanCarlos",
    name: "EureDog", // enterprice
    city: {
      id: "1",
      name: "Lleida",
      country: "Catalonia",
      postalCode: "25670"
    }
    ,
    adress: "Gardeny nº69",
    email: "juan.carlos@euredog.org",
    _links: null,
    authorization: "string",
    password: 'secret',

  };

  constructor() {}

  ngOnInit() {}
}
