import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgTemplateTestComponent } from './ng-template-test/ng-template-test.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { NgTemplateOutletExampleComponent } from './ng-template-outlet-example/ng-template-outlet-example.component';


const routes: Routes = [  
  { path: 'template', component: NgTemplateTestComponent },
  { path: 'ngtemplate', component: NgTemplateOutletExampleComponent },
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    NgTemplateTestComponent,
    TabContainerComponent,
    NgTemplateOutletExampleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
