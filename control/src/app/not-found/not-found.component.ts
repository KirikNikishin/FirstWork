import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
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
