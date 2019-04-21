import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureOneComponent } from './feature-one.component';
import { FeatureOneRoutes } from './feature-one.routes';

@NgModule({
  declarations: [FeatureOneComponent],
  imports: [CommonModule, RouterModule.forChild(FeatureOneRoutes)]
})
export class FeatureOneModule {}
