import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCreditCardComponent } from './insert-credit-card.component';

describe('InsertCreditCardComponent', () => {
  let component: InsertCreditCardComponent;
  let fixture: ComponentFixture<InsertCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCreditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
