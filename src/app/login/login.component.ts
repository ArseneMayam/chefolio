import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  // attrs
  @ViewChild('userNameInput') unameInput: ElementRef;
  @ViewChild('pwdInput') pwd: ElementRef;
  // tslint:disable-next-line: variable-name
  private _isLoginIncorrect = false;
  // methods
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  public get isLoginInCorrect(): boolean {
    return this._isLoginIncorrect;
  }
  userLogIn() {
    const username = this.unameInput.nativeElement.value;
    console.log('username', username);
    const passwd = this.pwd.nativeElement.value;
    console.log('password', passwd);
    const isLoginValid = this.loginService.login(username, passwd);
    console.log('login ', isLoginValid);
    this._isLoginIncorrect = !isLoginValid;
  }



}
