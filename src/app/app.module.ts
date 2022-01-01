import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';

import { AngularDraggableModule } from 'angular2-draggable';
import { BeforeAfterImageSliderComponent } from './components/before-after-image-slider/before-after-image-slider.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { IconAndShortTextComponent } from './components/icon-and-short-text/icon-and-short-text.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceComponent } from './components/service/service.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PriceComponent } from './components/price/price.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BeforeAfterImageSliderComponent,
    SidebarNavComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    IconAndShortTextComponent,
    ServiceListComponent,
    ServiceComponent,
    ServiceDetailsComponent,
    HomeComponent,
    HeaderComponent,
    PriceComponent,
    PriceCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
