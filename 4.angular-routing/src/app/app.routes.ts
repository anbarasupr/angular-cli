import { Routes } from '@angular/router';
//import { FeatureThreeComponent } from 'feature-three/public-api';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feature-one'
  },
  {
    path: 'feature-one',
    loadChildren: './feature-one/feature-one.module#FeatureOneModule'
  },
  {
    path: 'feature-two',
    loadChildren: './feature-two/feature-two.module#FeatureTwoModule'
  },
  {
    path: 'feature-three',
    //component: FeatureThreeComponent
    loadChildren: 'feature-three#FeatureThreeModule'
  }
];
