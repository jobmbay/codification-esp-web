/**
 * Created by jobmbay on 1/12/18.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [
  { path: 'authent', loadChildren: './autent/autent.module#AutentModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: '**', redirectTo: "authent", pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
