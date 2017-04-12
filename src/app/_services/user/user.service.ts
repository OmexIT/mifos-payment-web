import { Injectable } from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {AppSettings} from '../../app-settings';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(public _authHttp: AuthHttp) { }

  getUsers() {
    return this._authHttp.get(AppSettings.API_ENDPOINT + AppSettings.API_VERSION + '/user');
  }

  getUserById(id) {
    return this._authHttp.get(AppSettings.API_ENDPOINT + AppSettings.API_VERSION + '/user/' + id);
  }
}
