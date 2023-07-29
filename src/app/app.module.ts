import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LobbyComponent } from './lobby/lobby.component';
import { LobbyMapCardComponent } from './lobby-map-card/lobby-map-card.component';
import { HomeMainComponent } from './home-main/home-main.component';
const appRoute: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'duel', component: MainComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LobbyComponent,
    LobbyMapCardComponent,
    HomeMainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
