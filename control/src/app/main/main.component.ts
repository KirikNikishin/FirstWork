import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  city: string;
  country: string;
  entered: boolean;
  constructor(){}


items=[]
do(NewCity, NewCountry){
  this.items.push({city: NewCity, country: NewCountry});}
ngOnInit(){ 
  this.city='London';
  this.country='Great Britain'
  this.entered= false}
}
