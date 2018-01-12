import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutentComponent } from './autent/autent.component';
import {AutentModule} from "./autent/autent.module";
import {AppRoutingModule} from "./app.routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    AutentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AutentModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
