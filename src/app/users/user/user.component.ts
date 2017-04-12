import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_services/user/user.service';
import {Logger} from 'angular2-logger/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pageTitle = 'User Details';
  user: any = { };
  isNew = true;
  private sub: Subscription;

  constructor(private _userService: UserService,
              private _route: ActivatedRoute,
              private _logger: Logger) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        if (id) {
          this.isNew = false;
          this.getUser(id);
        }
      });
  }

  getUser(id) {
    this._userService.getUserById(id)
      .map((data: any) => data.json())
      .subscribe(
        data => {
          this.user = data;
          this._logger.debug(this.user);
        },
        err => this._logger.error(err),
        () => this._logger.info('Loaded user request completed.'));
  }
}
