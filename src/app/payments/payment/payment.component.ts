import { Component, OnInit } from '@angular/core';
import {PaymentService} from '../../_services/payment/payment.service';
import {Logger} from 'angular2-logger/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private sub: Subscription;
  payment: any = {};

  constructor(private _paymentService: PaymentService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _logger: Logger) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        if (id) {
          this.getPayent(id);
        }
      });
  }

  getPayent(id: number) {
    this._paymentService.getPaymentById(id)
      .map((data: any) => data.json())
      .subscribe(
        data => {
          this.payment = data;
          this._logger.debug(this.payment);
        },
        err => this._logger.error(err),
        () => this._logger.info('Get payment request completed.'));
  }
}
