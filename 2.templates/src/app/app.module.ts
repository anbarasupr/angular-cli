import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgTemplateTestComponent } from './ng-template-test/ng-template-test.component';
import { TabContainerComponent } from './tab-container/tab-container.component';


const routes: Routes = [  
  { path: 'template', component: NgTemplateTestComponent },
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    NgTemplateTestComponent,
    TabContainerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
