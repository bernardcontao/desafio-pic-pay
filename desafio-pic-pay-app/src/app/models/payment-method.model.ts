export class PaymentMethodModel {
  id: number;
  network: number;
  nameInThecard: string;
  number: number;
  expirationDate: string;
  cvv: number;
  billingCepAddress: string;
}