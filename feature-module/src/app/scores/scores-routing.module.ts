import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoresComponent } from './scores.component';

const routes: Routes = [
  //{ path: 'scor', component: ScoresComponent },
  { path: '', component: ScoresComponent },
  //{ path: '', redirectTo: '/scores/scor', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoresRoutingModule { }
