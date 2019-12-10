import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './roating/home/home.component';
import { NotFoundComponent } from './roating/not-found/not-found.component';
import { AboutComponent } from './roating/about/about.component';
import { ItemComponent } from './roating/item/item.component';
import { ItemStatComponent } from './roating/item/item-stat/item-stat.component';
import { ItemDetailsComponent } from './roating/item/item-details/item-details.component'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ItemComponent,
    ItemStatComponent,
    ItemDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
