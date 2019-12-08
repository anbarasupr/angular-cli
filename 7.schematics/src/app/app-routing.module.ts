import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileuploadComponent } from './components/fileupload/fileupload.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fileupload'
  },
  {
    path: 'fileupload',
    component: FileuploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
