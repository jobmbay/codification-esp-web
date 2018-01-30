/**
 * Created by jobmbay on 1/11/18.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AutentComponent} from "./autent.component";
import {InscriptionComponent} from "./inscription/inscription.component";

const authentRoutes: Routes = [
  {
    path: 'authent',
    component: AutentComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path:'register', component: InscriptionComponent},
      { path:'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AutentRoutingModule { }
