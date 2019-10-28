import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Array<UserModel>> {
    return this.http.get<UserModel[]>(environment.baseUrl + "users");
  }

  getUser(userId: number): Observable<UserModel> {
    return new Observable(o => {
      this.getUsers().subscribe(users => {
        let filteredUsers = users.filter(user => user.id == userId);
        if (filteredUsers && filteredUsers.length) {
          o.next(filteredUsers[0]);
        } else {
          o.next(null);
        }
      });
    });
  }
}
