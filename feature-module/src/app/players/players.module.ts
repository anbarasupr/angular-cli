import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlayersComponent]
})
export class PlayersModule { }
