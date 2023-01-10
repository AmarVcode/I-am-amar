import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItsmeComponent } from './myComponents/itsme/itsme.component';
import { LanguagesComponent } from './myComponents/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    ItsmeComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
