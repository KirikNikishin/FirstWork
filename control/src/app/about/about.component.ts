import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>Этот сайт тестовый, сделан для контрольной работы</p>`,
styles: [` 
    h1, h2{color:navy;}
    p{font-size:13px; color:blue; font-family:Verdana;}
`]
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
