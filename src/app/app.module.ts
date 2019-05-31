import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AutoCompleteModule } from 'primeng/autocomplete';

import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { PokeserviceService } from './pokeservice.service';
import { StatsService } from './stats.service';

import { StatsComponentComponent } from './stats-component/stats-component.component';
import {ChartModule} from 'primeng/chart';
import {ButtonModule} from 'primeng/button';



/*
@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YourAppModule { }*/

@NgModule({
  imports:      [ BrowserModule, FormsModule, AutoCompleteModule, HttpClientModule, ChartModule, BrowserAnimationsModule, ButtonModule ],
  declarations: [ AppComponent, MyComponentComponent, StatsComponentComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [PokeserviceService, StatsService, MyComponentComponent],

})
export class AppModule { }