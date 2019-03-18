import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  public get isLoginInCorrect(): boolean {
    return this._isLoginIncorrect;
  }
  userLogIn() {
    const username = this.unameInput.nativeElement.value;
    const passwd = this.pwd.nativeElement.value;
    const isLoginValid = this.loginService.login(username, passwd);
    this._isLoginIncorrect = !isLoginValid;
    if (isLoginValid) {
      this.router.navigate(['profile']);
    }
  }



}
