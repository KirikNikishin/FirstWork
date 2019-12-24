import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  entered: boolean;
  constructor() { }

  ngOnInit() {
    this.login = 'admin1';
    this.password = 'admin1';
    this.entered= false;
  }

  MakeLogin() {
    if (this.login == 'admin' && this.password == 'admin') 
    {
      console.log('Красавчик, ты смог войти!')
      this.entered = true
  }
  else {
    const pass = localStorage.getItem(this.password);
    const log = localStorage.getItem(this.login)
    if (log === this.login && pass === this.password) {
      console.log('Красавчик, ты смог войти');
      this.entered = true;
    }
    else {
      this.entered=false;
      localStorage.setItem(this.login, this.login);
      localStorage.setItem(this.password, this.password);
    }
  }
  }
}
