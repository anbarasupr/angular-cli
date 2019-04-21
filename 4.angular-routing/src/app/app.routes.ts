import { Routes } from '@angular/router';

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
  }
];
