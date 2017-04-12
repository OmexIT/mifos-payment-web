import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user/user.service';
import {Logger} from "angular2-logger/core";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle = 'Users';
  users: any [] = [];

  constructor(private _userService: UserService,
              private _logger: Logger) {
  }

  ngOnInit() {
    this._userService.getUsers()
      .map((data: any) => data.json())
      .subscribe(
        data => {
          this.users = data;
        },
        err => this._logger.error(err),
        () => this._logger.info('User list request completed.'));
  }

}
