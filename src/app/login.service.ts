import { Injectable } from '@angular/core';
import { User } from '../app/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {

  }
  private userList: User[] = [
    new User(0, 'Luc', 'abcd')
  ]

  public login(uname: string, pwd: string): boolean {
    let res = false;
    for (const user of this.userList) {
      if (uname === user.userName && pwd === user.password) {
        res = true;
        return res;
      }
    }
    return res;
  }
}
