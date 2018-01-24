import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CodificationComponent } from './codification/codification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { EchangerChambreComponent } from './echanger-chambre/echanger-chambre.component';
import {FormsModule} from "@angular/forms";
import {DataService} from "../data.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  declarations: [DashboardComponent, CodificationComponent, InscriptionComponent, StatistiqueComponent, EchangerChambreComponent]
})
export class HomeModule { }
