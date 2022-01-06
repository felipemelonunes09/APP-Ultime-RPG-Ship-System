import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdmModule } from './adm/adm.module';
import { PartsComponent } from './adm/parts/parts.component';
import { ShipsComponent } from './adm/ships/ships.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
