import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  @HostListener('window:scroll', ['$event']) // for window scroll event
  onScroll(event) {
    const windowScroll = window.pageYOffset;
    let navButtonContainerElement = document.getElementById("nav-button-container");
    let display = window.getComputedStyle(document.getElementById("sidenav-links")).display;

    if (display == "none") {
      if (windowScroll >= 100) {
        navButtonContainerElement.classList.add("grey-background");
      } else {
        navButtonContainerElement.classList.remove("grey-background");
      }
    }
  }

  onActivate(event) {
    if (event.constructor.name == "ServiceDetailsComponent" || event.constructor.name ==  "PriceComponent") {
      window.scroll(0,0);
    }
  }
}
