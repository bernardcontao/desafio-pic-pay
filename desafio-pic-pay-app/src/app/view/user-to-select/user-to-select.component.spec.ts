import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToSelectComponent } from './user-to-select.component';

describe('UserToSelectComponent', () => {
  let component: UserToSelectComponent;
  let fixture: ComponentFixture<UserToSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserToSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserToSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
