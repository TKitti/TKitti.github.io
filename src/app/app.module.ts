import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularDraggableModule } from 'angular2-draggable';
import { BeforeAfterImageSliderComponent } from './before-after-image-slider/before-after-image-slider.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    BeforeAfterImageSliderComponent,
    SidebarNavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
