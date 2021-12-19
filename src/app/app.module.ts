import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularDraggableModule } from 'angular2-draggable';
import { BeforeAfterImageSliderComponent } from './before-after-image-slider/before-after-image-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    BeforeAfterImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
