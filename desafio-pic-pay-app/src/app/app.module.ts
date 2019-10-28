import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './view/main-layout/main-layout.component';
import { ListUsersComponent } from './view/list-users/list-users.component';
import { UserToSelectComponent } from './view/user-to-select/user-to-select.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './services/user.service';
import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './services/loader.interceptor';
import { LoaderComponent } from './utils/loader/loader.component';
import { ModalComponent } from './utils/modal/modal.component';
import { PaymentComponent } from './view/payment/payment.component';
import { ListCreditCardsComponent } from './view/list-credit-cards/list-credit-cards.component';
import { InsertCreditCardComponent } from './view/insert-credit-card/insert-credit-card.component';
import { PaymentDoneComponent } from './view/payment-done/payment-done.component';
import { NgxCurrencyModule } from "ngx-currency";
import { FormsModule } from '@angular/forms';
import { PaymentMethodService } from './services/payment-method.service';
import { PaymentService } from './services/payment.service';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ListUsersComponent,
    UserToSelectComponent,
    LoaderComponent,
    ModalComponent,
    PaymentComponent,
    ListCreditCardsComponent,
    InsertCreditCardComponent,
    PaymentDoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgxCurrencyModule,
    FormsModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    UserService,
    PaymentMethodService,
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
