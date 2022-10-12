import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IknowComponent } from './components/iknow/iknow.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'iknow', component:IknowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
