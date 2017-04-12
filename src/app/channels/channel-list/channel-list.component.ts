import {Component, OnInit} from '@angular/core';
import {ChannelService} from '../../_services/channel/channel.service';
import {Logger} from 'angular2-logger/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  channels: any[] = [];

  constructor(private _channelService: ChannelService,
              private _logger: Logger) {
  }

  ngOnInit() {
    this._channelService.getChannels()
      .map((data: any) => data.json())
      .subscribe(
        data => {
          this.channels = data;
        },
        err => this._logger.error(err),
        () => this._logger.info('Loaded channel list request completed.'));

  }

}
