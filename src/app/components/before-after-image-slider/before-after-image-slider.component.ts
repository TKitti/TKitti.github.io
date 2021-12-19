import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-before-after-image-slider',
  templateUrl: './before-after-image-slider.component.html',
  styleUrls: ['./before-after-image-slider.component.css']
})
export class BeforeAfterImageSliderComponent implements OnInit {
  inBounds = true;
  movingOffset = { x: 0, y: 0 };
  endOffset = { x: 0, y: 0 };
  timerForImageSlider;
  imageURL1 = './../../../assets/photo1.jfif';
  imageURL2 = './../../../assets/photo2.jfif';


  constructor() {}


  ngOnInit() {}


  onImageSliderStart(event) {
    this.initImageSlider();
  }

  onImageSliderStop(event) {
    clearInterval(this.timerForImageSlider);
  }

  onImageSliderMoving(event) {
    this.movingOffset.x = event.x;
    this.movingOffset.y = event.y;
  }

  onImageSliderMoveEnd(event) {
    this.endOffset.x = event.x;
    this.endOffset.y = event.y;
    console.log(event.x);
    console.log(event.y);
  }




  removeChildren(parent) {
    let canvasElements = document.getElementsByTagName("canvas");
    
    // visszafele kell számoljon, mert ha 0-val kezdené, az első loop körben eltávolítja a 0. elemet (hiszen i=0),
    // aztán a második körben az '1'-es indexű elemet távolítaná el, hiszen az i=1, de az a második elem már nincs benne
    // mert az első loop kör után már csak egy elem maradt
    for (let i = canvasElements.length - 1; i >= 0; i--) {
      parent.removeChild(canvasElements[i]);
    }
  };


  initImageSlider() {
    this.timerForImageSlider = setInterval(() => {
      let image1Element = document.getElementById("image1");
      let image2Element = document.getElementById("image2");
      
      let image1NewWidth = this.movingOffset.x;
      let image2NewWidth = 410 - this.movingOffset.x;

      if (image1Element && image1Element.style) {
        image1Element.style.width = image1NewWidth + "px";
      }

      if (image2Element && image2Element.style) {
        image2Element.style.width = image2NewWidth + "px";
      }
    }, 50);
  }
}
