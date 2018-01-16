/**
 * Created by jobmbay on 1/11/18.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home.component";
import { DashboardComponent} from "./dashboard/dashboard.component";
import { CodificationComponent } from "./codification/codification.component";
import { InscriptionComponent } from './inscription/inscription.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path:'dashboard', component: DashboardComponent},
      { path:'codification', component: CodificationComponent},
      { path:'inscription', component: InscriptionComponent}
      
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
