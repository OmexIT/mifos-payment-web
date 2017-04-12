import { Injectable } from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {AppSettings} from '../../app-settings';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PaymentService {

  constructor(public _authHttp: AuthHttp) { }

  getPayments() {
    return this._authHttp.get(AppSettings.API_ENDPOINT + AppSettings.API_VERSION + '/payment');
  }

  getPaymentById(id) {
    return this._authHttp.get(AppSettings.API_ENDPOINT + AppSettings.API_VERSION + '/payment/' + id);
  }
}
