import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit{
  name: string = 'Денис'

  constructor(private router: Router) {}
  goHome() {
    this.router.navigate([''])
  }

  ngOnChanges() {
    console.log('On changes'); 
  }

  ngOnInit() {}
}
