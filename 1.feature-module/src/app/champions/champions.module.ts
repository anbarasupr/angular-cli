import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionsComponent } from './champions.component';

@NgModule({
  imports: [
    CommonModule,
    ChampionsRoutingModule
  ],
  declarations: [ChampionsComponent]
})
export class ChampionsModule { }
