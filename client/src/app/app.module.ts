import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroMoreComponent } from './components/hero-more/hero-more.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { TreatmentsCardComponent } from './components/treatments/treatments-card/treatments-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component';
import { CarouselMenuComponent } from './components/carousel/carousel-menu/carousel-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarDirective } from './directives/navbar.directive';
import { FooterDirective } from './directives/footer.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    HeroComponent,
    HeaderComponent,
    HeroMoreComponent,
    TreatmentsComponent,
    TreatmentsCardComponent,
    CarouselComponent,
    CarouselItemComponent,
    CarouselMenuComponent,
    ContactComponent,
    FooterComponent,
    NavbarDirective,
    FooterDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxCaptchaModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
