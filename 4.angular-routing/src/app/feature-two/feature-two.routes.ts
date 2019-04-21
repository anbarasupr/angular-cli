import { Routes } from '@angular/router';
import { FeatureTwoComponent } from './feature-two.component';

export const FeatureTwoRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feature-two-component'
  },
  {
    path: 'feature-two-component',
    component: FeatureTwoComponent
  }
];
