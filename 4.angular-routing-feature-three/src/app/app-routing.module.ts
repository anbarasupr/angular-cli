import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureThreeComponent } from './feature-three/feature-three.component';

const routes: Routes = [
  { path: 'feature-three', component: FeatureThreeComponent }
 /*  {
    path: 'feature-three',
    loadChildren: './feature-three/feature-three.module#FeatureThreeModule'
  } */
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
