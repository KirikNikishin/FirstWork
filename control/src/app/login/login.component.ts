import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  constructor() { }

  ngOnInit() {
    this.login = 'admin1';
    this.password = 'admin1';
  }

  MakeLogin() {
    if (this.login == 'admin' && this.password == 'admin') 
    {console.log('Красавчик, ты смог войти!')}
  }
}
