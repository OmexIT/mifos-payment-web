import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {AppSettings} from '../../app-settings';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ChannelService {

  constructor(public _authHttp: AuthHttp) {
  }

  createChannel(channel) {
    return this._authHttp.post(AppSettings.API_ENDPOINT + AppSettings.API_VERSION + '/channel', JSON.stringify(channel));
  }

  getChannels() {
    return this._authHttp.get(AppSettings.API_ENDPOINT + AppSettings.API_VERSION + '/channel');
  }
  getChannelById(id) {
    return this._authHttp.get(AppSettings.API_ENDPOINT + AppSettings.API_VERSION + '/channel/' + id);
  }
}
