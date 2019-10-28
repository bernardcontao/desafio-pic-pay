import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { PaymentMethodModel } from 'src/app/models/payment-method.model';
import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private user: UserModel;
  private selectedPaymentMethod: PaymentMethodModel;
  private value: number;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private paymentMethodService: PaymentMethodService,
    private paymentService: PaymentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getSelectedPaymentMethod();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  getSelectedPaymentMethod(): void {
    this.paymentMethodService.getSelectedPaymentMethod()
      .subscribe(selectedPaymentMethod => this.selectedPaymentMethod = selectedPaymentMethod);
  }

  insertCard(): void {
    this.router.navigate([{ outlets: { modal: ['payment', 'insert-credit-card', this.user.id] } }]);
  }

  selectCard(): void {
    this.router.navigate([{ outlets: { modal: ['payment', 'select-credit-card', this.user.id] } }]);
  }

  pay(): void {
    if (this.user && this.selectedPaymentMethod && this.value && this.value > 0) {
      this.paymentService.pay(this.user.id, this.value, this.selectedPaymentMethod).subscribe(transaction => {
        if (transaction.success) {

        } else {
          alert(transaction.status);
        }
        console.log(transaction);
      });
    }
  }

}
