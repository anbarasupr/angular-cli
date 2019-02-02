import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoresRoutingModule } from './scores-routing.module';
import { ScoresComponent } from './scores.component';

@NgModule({
  imports: [
    CommonModule,
    ScoresRoutingModule
  ],
  declarations: [ScoresComponent]
})
export class ScoresModule { }
