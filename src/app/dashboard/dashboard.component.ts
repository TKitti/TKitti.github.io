import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counter: number;
  timer: any;
  texts = [
    { id: 1, value: "fogkőeltávolítás"},
    { id: 2, value: "fehérítés"},
    { id: 3, value: "polírozás"},
  ];
  currentTextInTextSlide = this.texts[0];


  
  constructor(private htmlElement: ElementRef) {}

  ngOnInit() {
    setTimeout(this.showMainImageDelayed, 1000);
    this.initTimer(this.texts);
  }



  showMainImageDelayed() {
    document.getElementById("mainsmile").classList.remove("hide");
    document.getElementById("mainsmile").classList.add("show");
  }


  onCircleClick(element) {
    let selectedId = (element.target.localName == "li") ? element.target.value : element.target.id;
    this.currentTextInTextSlide = this.filterTextById(selectedId)[0];
    this.makeServiceElementActive(selectedId);
  }


  filterTextById(selectedId) {
    return this.texts.filter(text => (text["id"] == selectedId));
  }


  runTimer(texts) {
    this.counter = this.counter + 1;
    if (this.counter == texts.length) {
      this.counter = 0;
    }

    this.currentTextInTextSlide = this.texts[this.counter];
    this.makeServiceElementActive(this.counter+1); 
  }


  initTimer (texts) {
    // stop previous timers if any
    clearInterval(this.timer);
    // start counting from 30 seconds
    this.counter = 0;
    this.timer = setInterval(() => this.runTimer(texts), 3000);
  }


  makeServiceElementActive(selectedElementId) {
    let currentCircleElement = this.htmlElement.nativeElement.querySelector(".circle" + selectedElementId);
    
    this.htmlElement.nativeElement.querySelectorAll(".circle").forEach(element => {
      element.classList.remove('activeCircle'); 
    });
    
    currentCircleElement.classList.add('activeCircle'); 
  }
}
