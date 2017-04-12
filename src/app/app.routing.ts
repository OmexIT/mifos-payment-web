import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from './_guards/auth.guard';
import {HomeComponent} from './home/home.component';
import {PaymentListComponent} from './payments/payment-list/payment-list.component';
import {ChannelListComponent} from './channels/channel-list/channel-list.component';
import {ChannelComponent} from './channels/channel/channel.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserComponent} from './users/user/user.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'payments', component: PaymentListComponent, canActivate: [AuthGuard]},
  {path: 'channels', component: ChannelListComponent, canActivate: [AuthGuard]},
  {path: 'channel', component: ChannelComponent, canActivate: [AuthGuard]},
  {path: 'channel/:id', component: ChannelComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'user/:id', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
