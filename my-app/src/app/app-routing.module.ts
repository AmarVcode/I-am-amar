import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItsmeComponent } from './myComponents/itsme/itsme.component';
import { LanguagesComponent } from './myComponents/languages/languages.component';

const routes: Routes = [
  {path:"", component: ItsmeComponent},
  {path:"languages", component: LanguagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
