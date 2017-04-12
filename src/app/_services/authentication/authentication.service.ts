import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {AppSettings} from '../../app-settings';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Logger} from 'angular2-logger/core';

@Injectable()
export class AuthenticationService {

  constructor(private _http: Http,
              private _logger: Logger) {
  }

  login(username: string, password: string) {
    this._logger.info('Trying to login ...');
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa('client:secret'));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({headers: headers});

    return this._http.post(AppSettings.API_ENDPOINT + '/oauth/token', body, options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const data = response.json();
        if (data && data.access_token) {
          this._logger.info(data);
          this._logger.debug('Loggin was successful');
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          sessionStorage.setItem('token', JSON.stringify(data));
        }
      })
      // errors if any
      .catch(this.handleError);
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('token');
  }

  isLoggedin(): boolean {
    this._logger.debug('Checking if logged in ...');
    if (sessionStorage.getItem('token')) {
      this._logger.debug('User is logged in');
      return true;
    }
    this._logger.debug('User not logged in!')
    return false;
  }

  private handleError(error: Response) {
    this._logger.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
