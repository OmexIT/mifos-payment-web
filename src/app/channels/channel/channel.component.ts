import {Component, OnInit} from '@angular/core';
import {ChannelService} from '../../_services/channel/channel.service';
import {Logger} from 'angular2-logger/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  pageTitle = 'Channel Details';
  channel: any = {channel_type: ''};
  isNew = true;
  private sub: Subscription;

  constructor(private _channelService: ChannelService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _logger: Logger) {
  }

  ngOnInit() {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        if (id) {
          this.isNew = false;
          this.getChannel(id);
        }
      });
  }

  getChannel(id: number) {
    this._channelService.getChannelById(id)
      .map((data: any) => data.json())
      .subscribe(
        data => {
          this.channel = data;
          this._logger.info(this.channel);
        },
        err => this._logger.error(err),
        () => this._logger.info('Loaded channel request completed.'));
  }

  createChannel() {
    this._channelService.createChannel(this.channel)
      .map((data: any) => data.json())
      .subscribe(
        data => {
          this.channel = data;
          this._logger.debug(this.channel);
          this.navigateToChannels();
        },
        err => this._logger.error(err),
        () => this._logger.info('Loaded channel request completed.'));
  }

  navigateToChannels() {
    this._router.navigateByUrl('/channels');
  }
}
