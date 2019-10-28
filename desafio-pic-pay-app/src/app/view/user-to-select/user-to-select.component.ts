import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'user-to-select',
  templateUrl: './user-to-select.component.html',
  styleUrls: ['./user-to-select.component.css']
})
export class UserToSelectComponent implements OnInit {

  private user: UserModel;

  @Input() actionName: string;

  @Input('user')
  set setuser(user: UserModel) {
    this.user = user;
  }

  @Output() userSelected = new EventEmitter<UserModel>();

  constructor() { }

  ngOnInit() {
  }

  private clickAction(): void {
    this.userSelected.emit(this.user);
  }

}
