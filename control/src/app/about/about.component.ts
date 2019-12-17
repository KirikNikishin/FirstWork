import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnChanges() {console.log('onChanges')}

  ngOnInit() {console.log('OnInit')}

  ngDoCheck() {console.log('DoCheck')}

  ngAfterContentChecked() {console.log('AfterContentChecked')}

  ngAfterViewChecked() {console.log('AfterViewChecked')}

  ngAfterViewInit() {console.log('AfterViewInit')}

  ngOnDestroy() {console.log('OnDestroy')}
  
  constructor() { }



}
