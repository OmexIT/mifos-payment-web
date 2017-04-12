import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../_services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormData: any = {};
  loading = false;
  returnUrl: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _authService: AuthenticationService,
              private _alertService: AlertService) {
  }

  ngOnInit() {
    // reset login status
    this._authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    if (this._authService.isLoggedin()) {
      this._router.navigate([this.returnUrl]);
    }
  }

  performLogin() {
    let username = this.loginFormData.username;
    let password = this.loginFormData.password;
    console.log(username);
    console.log(password);
    this._authService.login(username, password).subscribe(
      data => {
        this._router.navigate([this.returnUrl]);
      },
      error => {
        this._alertService.error(error);
        this.loading = false;
      });
  }

}
