import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamsComponent]
})
export class TeamsModule { }
