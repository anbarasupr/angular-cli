import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { GamesModule } from './games/games.module';

import { TeamsModule } from './teams/teams.module';

import { PlayersModule } from './players/players.module';
import { PlayersRoutingModule } from './players/players-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule, ... It should come after child routes loaded

    //RouterModule.forRoot(routes),
    GamesModule,
    TeamsModule,
    PlayersModule,
    PlayersRoutingModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
