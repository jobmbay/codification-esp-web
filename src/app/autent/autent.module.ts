import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutentRoutingModule} from "./authent-routing.module";
import {LoginComponent} from "./login/login.component";

@NgModule({
  imports: [
    CommonModule,
    AutentRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AutentModule { }
