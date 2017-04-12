import {Component} from '@angular/core';
import {AuthenticationService} from './_services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  userName = 'Antony Omeri';

  constructor(private  _authenticationService: AuthenticationService) {
  }

  isLoggedin(): boolean {
    return this._authenticationService.isLoggedin();
  }

  performLogout() {
    this._authenticationService.logout();
  }
}
