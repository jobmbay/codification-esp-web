import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutentRoutingModule} from "./authent-routing.module";
import {LoginComponent} from "./login/login.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AutentRoutingModule,
    HttpModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AutentModule { }
