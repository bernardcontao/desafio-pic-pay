import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionModel } from '../models/transaction.model';
import { PaymentMethodModel } from '../models/payment-method.model';

@Injectable()
export class PaymentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  pay(userId: number, value: number, paymentMethod: PaymentMethodModel): Observable<TransactionModel> {
    return new Observable(o => {
      let body = { card_number: paymentMethod.number, cvv: paymentMethod.cvv, value: value, expiry_date: paymentMethod.expirationDate, destination_user_id: userId };
      let request = this.http.post(environment.baseUrl + "transaction", body, this.httpOptions);
      request.subscribe(x => {
        o.next(x["transaction"]);
        o.complete();
      });
    })
  }

}
