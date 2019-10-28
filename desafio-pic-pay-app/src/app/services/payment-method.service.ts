import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { PaymentMethodModel } from '../models/payment-method.model';
import { NetworkModel } from '../models/network.model';

@Injectable()
export class PaymentMethodService {

  private getSequence(): number {
    let id = parseInt(localStorage.getItem('payment-method-sequence'));
    if (!id) {
      id = 0;
    }
    localStorage.setItem('payment-method-sequence', (id + 1).toString());
    return id;
  }

  validate(paymentMethod: PaymentMethodModel): boolean {
    return paymentMethod.network && !!paymentMethod.nameInThecard && !!paymentMethod.number && !!paymentMethod.expirationDate && !!paymentMethod.cvv && !!paymentMethod.billingCepAddress;
  }

  private _getPaymentMethods(): Array<PaymentMethodModel> {
    let paymentMethods: Array<PaymentMethodModel> = JSON.parse(localStorage.getItem('payment-methods'));
    if (!paymentMethods || paymentMethods.length <= 0) {
      paymentMethods = new Array<PaymentMethodModel>();
    }
    return paymentMethods;
  }

  getPaymentMethods(): Observable<Array<PaymentMethodModel>> {
    return of(this._getPaymentMethods());
  }

  private savePaymentMethods(paymentMethods: Array<PaymentMethodModel>): void {
    if (!paymentMethods || paymentMethods.length <= 0) {
      paymentMethods = new Array<PaymentMethodModel>();
    }
    localStorage.setItem('payment-methods', JSON.stringify(paymentMethods));
  }


  saveSelectedPaymentMethod(paymentMethod: PaymentMethodModel): void {
    if (paymentMethod && paymentMethod.id !== null && paymentMethod.id !== undefined) {
      localStorage.setItem('selected-payment-method-id', paymentMethod.id.toString());
    }
  }

  savePaymentMethod(paymentMethod: PaymentMethodModel) {
    if (this.validate(paymentMethod)) {
      let paymentMethods = this._getPaymentMethods();
      if (paymentMethod.id === null || paymentMethod.id === undefined) {
        paymentMethod.id = this.getSequence();
        paymentMethods.push(paymentMethod);
      } else {
        const index = paymentMethods.findIndex(x => x.id === paymentMethod.id);
        if (index > -1) {
          paymentMethods[index] = paymentMethod;
        } else {
          paymentMethods.push(paymentMethod);
        }
      }
      this.savePaymentMethods(paymentMethods);
      this.saveSelectedPaymentMethod(paymentMethod);
    }
  }

  getNetworks() {
    let networks = new Array<NetworkModel>();
    networks.push(new NetworkModel(1, "MasterCard"));
    networks.push(new NetworkModel(2, "Visa"));
    networks.push(new NetworkModel(3, "American Express"));
    return of(networks);
  }

  getPaymentMethod(id: number): Observable<PaymentMethodModel> {
    let paymentMethods = this._getPaymentMethods();
    const index = paymentMethods.findIndex(paymentMethod => paymentMethod.id === id);
    if (index > -1) {
      return of(paymentMethods[index]);
    } else {
      return of(null);
    }
  }

  getSelectedPaymentMethod(): Observable<PaymentMethodModel> {
    let id = parseInt(localStorage.getItem('selected-payment-method-id'));
    if (id !== null && id !== undefined) {
      return this.getPaymentMethod(id);
    } else {
      return of(null);
    }
  }
}
