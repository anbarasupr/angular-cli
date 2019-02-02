import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  //{ path: 'teams', component: TeamsComponent },
  //{ path: 'play', component: PlayersComponent },
  { path: 'scores', loadChildren: './scores/scores.module#ScoresModule' },
  { 
    path: 'dash', 
    component: DashboardComponent,
    children:[
      { path: 'games', component: GamesComponent },
      //{ path: 'games', component: GamesComponent },
      { path: '', redirectTo: '/dash/games', pathMatch: 'full' },
    ] 
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
