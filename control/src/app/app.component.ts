import { Component, OnChanges, SimpleChanges, Input} from '@angular/core';
      
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html' 
})
export class AppComponent implements OnChanges { 
    CurrentDate=Date.now()
    name:string="Tom";
    age:number = 25;
    @Input() userName: string;
    ngOnChanges(changes: SimpleChanges) {
  }
      }
