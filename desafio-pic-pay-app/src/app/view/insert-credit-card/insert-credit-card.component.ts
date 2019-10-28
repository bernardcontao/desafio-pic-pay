import { Component, OnInit } from '@angular/core';
import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { PaymentMethodModel } from 'src/app/models/payment-method.model';
import { NetworkModel } from 'src/app/models/network.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insert-credit-card',
  templateUrl: './insert-credit-card.component.html',
  styleUrls: ['./insert-credit-card.component.css']
})
export class InsertCreditCardComponent implements OnInit {
  private paymentMethod: PaymentMethodModel;
  networksOptions: Array<NetworkModel>;

  constructor(private route: ActivatedRoute, private paymentMethodService: PaymentMethodService, private router: Router) { }

  ngOnInit() {
    this.paymentMethod = new PaymentMethodModel();
    this.getNetworks();
  }

  private getNetworks(): void {
    this.paymentMethodService.getNetworks()
      .subscribe(networks => this.networksOptions = networks);
  }

  private createCard(): void {
    this.paymentMethodService.savePaymentMethod(this.paymentMethod);
    this.router.navigate([{ outlets: { modal: ['payment', 'select-credit-card', this.route.snapshot.paramMap.get('id')] } }]);
  }

}
