import {BrowserModule} from '@angular/platform-browser';
import {isDevMode, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {AuthGuard} from './_guards/auth.guard';
import {HomeComponent} from './home/home.component';
import {ChannelListComponent} from './channels/channel-list/channel-list.component';
import {ChannelComponent} from './channels/channel/channel.component';
import {PaymentComponent} from './payments/payment/payment.component';
import {PaymentListComponent} from './payments/payment-list/payment-list.component';
import {UserComponent} from './users/user/user.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './_services/authentication/authentication.service';
import {AlertComponent} from './_directives/alert/alert.component';
import {AlertService} from './_services/alert/alert.service';
import {AuthModule} from './_modules/auth/auth.module';
import {Logger} from 'angular2-logger/core';
import {environment} from '../environments/environment';
import {ChannelService} from './_services/channel/channel.service';
import {PaymentService} from './_services/payment/payment.service';
import {UserService} from './_services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelListComponent,
    ChannelComponent,
    PaymentComponent,
    PaymentListComponent,
    UserComponent,
    UserListComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AuthModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    Logger,
    ChannelService,
    PaymentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private logger: Logger) {
    if (isDevMode()) {
      console.log('To see debug logs enter: \'logger.level = logger.Level.DEBUG;\' in your browser console');
    }
    this.logger.level = environment.logger.level;
  }
}
