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
    let opacity = window.getComputedStyle(document.getElementById("sidenav-links")).opacity;

    if (opacity == "0") {
      if (windowScroll >= 100) {
        navButtonContainerElement.classList.add("grey-background");
      } else {
        navButtonContainerElement.classList.remove("grey-background");
      }
    }
  }
}
