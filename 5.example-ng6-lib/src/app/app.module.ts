import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ExampleNg6LibModule } from 'example-ng6-lib';
import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
  /* {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feature-one'
  }, */
  {
    path: 'ng-feature',
    loadChildren: 'example-ng6-lib#ExampleNg6LibModule'
  } 
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //ExampleNg6LibModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
