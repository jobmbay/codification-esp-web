import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CodificationComponent } from './codification/codification.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [DashboardComponent, CodificationComponent]
})
export class HomeModule { }
