import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionsComponent } from './champions.component';

const routes: Routes = [
  { path: 'champ', component: ChampionsComponent },
  //{ path: '', component: ChampionsComponent },
  { path: '', redirectTo: '/dash/champions/champ', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionsRoutingModule { }
