import { Component, OnInit } from "@angular/core";
import { User } from 'src/app/domain/user';
import { AuthenticationBasicService } from 'src/app/services/authentication-basic.service';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {

  user: User;
  
  constructor(private authenticationBasicService: AuthenticationBasicService) {
    this.user = authenticationBasicService.getCurrentUser();
  }

  ngOnInit() {}
}
