import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../../_services/payment/payment.service';
import {Logger} from 'angular2-logger/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  payments: any[]= [];
  data: any = {};

  constructor(private _paymentService: PaymentService,
              private _logger: Logger) {
  }

  ngOnInit() {
    this._paymentService.getPayments()
      .map((data: any) => data.json())
      .subscribe(
        data => {
          this.payments = data;
        },
        err => this._logger.error(err),
        () => this._logger.info('Loaded payment list request completed.'));
  }

}
