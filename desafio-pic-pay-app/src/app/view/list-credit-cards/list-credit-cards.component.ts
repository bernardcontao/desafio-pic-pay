import { Component, OnInit } from '@angular/core';
import { PaymentMethodModel } from 'src/app/models/payment-method.model';
import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-credit-cards',
  templateUrl: './list-credit-cards.component.html',
  styleUrls: ['./list-credit-cards.component.css']
})
export class ListCreditCardsComponent implements OnInit {

  private selectedPaymentMethod: PaymentMethodModel;
  private paymentMethods: Array<PaymentMethodModel>;

  constructor(private route: ActivatedRoute, private paymentMethodService: PaymentMethodService, private router: Router) { }

  ngOnInit() {
    this.getSelectedPaymentMethod();
    this.getPaymentMethods();
  }

  private getSelectedPaymentMethod(): void {
    this.paymentMethodService.getSelectedPaymentMethod()
      .subscribe(selectedPaymentMethod => this.selectedPaymentMethod = selectedPaymentMethod);
  }
  private getPaymentMethods(): void {
    this.paymentMethodService.getPaymentMethods()
      .subscribe(paymentMethods => this.paymentMethods = paymentMethods);
  }

  private isThisPaymentMethodSelected(paymentMethod: PaymentMethodModel): boolean {
    return this.selectedPaymentMethod && paymentMethod.id === this.selectedPaymentMethod.id;
  }

  private changeSelectedCard(paymentMethod: PaymentMethodModel): void {
    this.selectedPaymentMethod = paymentMethod;
  }

  private selectCard(): void {
    this.paymentMethodService.saveSelectedPaymentMethod(this.selectedPaymentMethod);
    this.router.navigate([{ outlets: { modal: ['payment', 'pay', this.route.snapshot.paramMap.get('id')] } }]);
  }

  private createCard(): void {
    this.router.navigate([{ outlets: { modal: ['payment', 'insert-credit-card', this.route.snapshot.paramMap.get('id')] } }]);
  }

}
