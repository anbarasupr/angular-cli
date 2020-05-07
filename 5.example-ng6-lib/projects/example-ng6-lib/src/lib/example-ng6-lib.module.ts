import { NgModule } from '@angular/core';
import { ExampleNg6LibComponent } from './example-ng6-lib.component';
import { FooComponent } from './foo/foo.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  /* {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ng6'
  }, */
  {
    path: 'ng6',
    component: ExampleNg6LibComponent
  },
  {
    path: 'foo',
    component: FooComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    ExampleNg6LibComponent,
    FooComponent
  ],
  exports: [
    ExampleNg6LibComponent,
    FooComponent
  ]
})
export class ExampleNg6LibModule { }
