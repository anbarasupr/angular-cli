import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './games/games.component';
import { Routes, RouterModule } from '@angular/router';

// eager loading module - games component is refered in declarations of games modules not in app module but imported in appmodule
import { GamesModule } from './games/games.module';

// eager loading module - teams component is not imported in app module. All the teams dependencies are removed from app module except the teams module ad teams routing modules. Also the routing for teams component is also handled by teams routing modules not in app modules
import { TeamsModule } from './teams/teams.module';
import { TeamsRoutingModule } from './teams/teams-routing.module';

// eager loading module - players component is not imported in app module. All the teams dependencies are removed from app module except the players module. here the routing for players component is handled by players modules itself not in app modules or players rouing module
import { PlayersModule } from './players/players.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [  
  { path: 'games', component: GamesComponent },
  //{ path: 'teams', component: TeamsComponent },
  //{ path: 'players', component: PlayersComponent },
  //{ path: 'home', component: HomeComponent },
  { path: 'hm', loadChildren: './home/home.module#HomeModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    RouterModule.forRoot(routes),
    GamesModule,
    TeamsModule,   
    TeamsRoutingModule,
    PlayersModule,
    HomeModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
