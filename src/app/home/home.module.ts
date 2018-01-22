import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CodificationComponent } from './codification/codification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { EchangerChambreComponent } from './echanger-chambre/echanger-chambre.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [DashboardComponent, CodificationComponent, InscriptionComponent, StatistiqueComponent, EchangerChambreComponent]
})
export class HomeModule { }
