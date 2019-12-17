import { Component, OnChanges, SimpleChanges, Input} from '@angular/core';
      
@Component({
    selector: 'app-root',
    template: `<app-main></app-main>
                <input type="text" [(ngModel)]="name" />
                <input type="number" [(ngModel)]="age" />`
})
export class AppComponent implements OnChanges { 
    name:string="Tom";
    age:number = 25;
    @Input() userName: string;
    ngOnChanges(changes: SimpleChanges) {
  }
      }
