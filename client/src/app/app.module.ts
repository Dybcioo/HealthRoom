import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { HeroMoreComponent } from './hero-more/hero-more.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { TreatmentsCardComponent } from './treatments/treatments-card/treatments-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    HeroComponent,
    HeaderComponent,
    HeroMoreComponent,
    TreatmentsComponent,
    TreatmentsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
