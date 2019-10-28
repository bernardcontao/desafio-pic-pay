import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './view/main-layout/main-layout.component';
import { ListUsersComponent } from './view/list-users/list-users.component';
import { PaymentComponent } from './view/payment/payment.component';
import { InsertCreditCardComponent } from './view/insert-credit-card/insert-credit-card.component';
import { ListCreditCardsComponent } from './view/list-credit-cards/list-credit-cards.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-users',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'list-users', component: ListUsersComponent },
    ]
  },
  {
    path: 'payment', outlet: 'modal', children: [
      { path: 'pay/:id', component: PaymentComponent },
      { path: 'insert-credit-card/:id', component: InsertCreditCardComponent },
      { path: 'select-credit-card/:id', component: ListCreditCardsComponent },
    ]
  },
  {
    path: '**',
    redirectTo: 'list-users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
