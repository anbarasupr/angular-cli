import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureThreeComponent } from './feature-three.component';

const routes: Routes = [
  { path: '', component: FeatureThreeComponent },
  { path: 'feature-three-module', component: FeatureThreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureThreeRoutingModule { }
