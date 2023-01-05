import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { Anime1Component } from './myanimation/anime1/anime1.component';
import { Anime2Component } from './myanimation/anime2/anime2.component';
import { Anime3Component } from './myanimation/anime3/anime3.component';
import { Anime4Component } from './myanimation/anime4/anime4.component';
import { Anime5Component } from './myanimation/anime5/anime5.component';
import { Anime6Component } from './myanimation/anime6/anime6.component';
import { Anime7Component } from './myanimation/anime7/anime7.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    Anime1Component,
    Anime2Component,
    Anime3Component,
    Anime4Component,
    Anime5Component,
    Anime6Component,
    Anime7Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
