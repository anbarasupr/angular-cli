import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';


const routes: Routes = [  
  { path: 'quotes', component: QuotesComponent },
  { path: '', redirectTo: '/quotes', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    QuoteComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
