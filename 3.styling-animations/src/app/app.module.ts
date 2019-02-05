import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { QuoteComponent } from './quote/quote.component';


const routes: Routes = [  
  { path: 'author', component: AuthorComponent },
  { path: 'quote', component: QuoteComponent },
  { path: '', redirectTo: '/quote', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
