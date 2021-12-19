import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularDraggableModule } from 'angular2-draggable';
import { BeforeAfterImageSliderComponent } from './components/before-after-image-slider/before-after-image-slider.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { IconAndShortTextComponent } from './components/icon-and-short-text/icon-and-short-text.component';


@NgModule({
  declarations: [
    AppComponent,
    BeforeAfterImageSliderComponent,
    SidebarNavComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    IconAndShortTextComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
