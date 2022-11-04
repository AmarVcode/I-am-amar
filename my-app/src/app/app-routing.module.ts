import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { IknowComponent } from './components/iknow/iknow.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'iknow', component:IknowComponent},
  {path: 'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'project', component:ProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
