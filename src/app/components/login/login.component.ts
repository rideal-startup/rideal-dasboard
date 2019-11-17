import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationBasicService } from 'src/app/services/authentication-basic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public loginError = false;

  constructor(
    private authenticationService: AuthenticationBasicService,
    private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    this.authenticationService.login(this.username, this.password)
      .subscribe(user => {
        this.authenticationService.storeCurrentUser(user);
        this.redirectToDashboard();
      }, error => {
        console.log(error);
        this.loginError = true;
      });
  }

  redirectToDashboard() {
    this.router.navigateByUrl('/admin/dashboard');
  }
}
