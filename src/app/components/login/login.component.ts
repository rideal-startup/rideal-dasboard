import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationBasicService } from 'src/app/services/authentication-basic.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private authenticationService: AuthenticationBasicService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit(): void {
    this.authenticationService.login(this.username, this.password)
      .subscribe(
        user => {
        this.authenticationService.storeCurrentUser(user);
      });
  }


    redirectToDashboard() {
      // TODO: Authenticate
      console.log(this.username, this.password);
      this.router.navigateByUrl('/admin/dashboard');
    }
}
