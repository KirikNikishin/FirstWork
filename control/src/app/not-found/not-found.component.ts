import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>Такой страницы нет</p>
  <div>
                    <nav>
                        <a routerLink="">Вернуться на главную</a>
                    </nav>
                    <router-outlet></router-outlet>
               </div>`,
styles: [` 
    h1, h2{color:navy;}
    p{font-size:13px; color:red; font-family:Verdana;}
`]
})
export class NotFoundComponent implements OnInit {
  CurrentDate=Date.now()
  Number1 = 3.14
  Number2 = 2048.1234873472387
  Number3 = 52369024.824778
  Number4 = 324789.0443333
  Message='Ангуляр класс'
  constructor() { }

  ngOnInit() {
  }

}
