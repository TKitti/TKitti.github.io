import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-before-after-image-slider',
  templateUrl: './before-after-image-slider.component.html',
  styleUrls: ['./before-after-image-slider.component.css']
})
export class BeforeAfterImageSliderComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateWidthsAndHeights();
    this.initImageSlider();
  }

  @Input() beforeImg: string;
  @Input() afterImg: string;

  inBounds = true;
  movingOffset = { x: 0, y: 0 };
  endOffset = { x: 0, y: 0 };
  timerForImageSlider;
  image1Element;
  image2Element;
  containerNewWidth;


  constructor() {}


  ngOnInit() {
    this.calculateWidthsAndHeights();
  }


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
  }


  calculateWidthsAndHeights() {
    let containerOriginalWidth = document.getElementsByClassName("container")[0].getBoundingClientRect().width;
    let dragContainerElement = document.getElementById("imageSliderDragContainer");
    let sliderElement = document.getElementById("draggableImageSlider");
    

    // when multiplying by 0.66, it gives an aspect ratio of 3:2 for the image
    if (containerOriginalWidth > 400) {
      this.containerNewWidth = 400;
      dragContainerElement.style.width = "400px";
      dragContainerElement.style.height = (400 * 0.66) + "px";
      sliderElement.style.height = (400 * 0.66) - 1 + "px";

      //slider has position:absolute style to be displayed above the images
      //therefore it's left:0 value is at the left side of the screen, not the left side of the draggable container
      //so we have to use the containerOriginalWidth to set the slider in the middle of the page
      sliderElement.style.left = (containerOriginalWidth / 2) + 5 + "px";
    } else {
      this.containerNewWidth = containerOriginalWidth;
      dragContainerElement.style.width = this.containerNewWidth + "px";
      dragContainerElement.style.height = (this.containerNewWidth * 0.66) + "px";
      sliderElement.style.height = (this.containerNewWidth * 0.66) - 1 + "px";
      sliderElement.style.left = (containerOriginalWidth / 2) + 5 + "px";
    }
    

    this.image1Element = document.getElementById('image1');
    this.image1Element.setAttribute('src', this.beforeImg);
    this.image1Element.style.width = (this.containerNewWidth - 1) / 2 + "px";
    this.image2Element = document.getElementById('image2');
    this.image2Element.setAttribute('src', this.afterImg);
    this.image2Element.style.width = (this.containerNewWidth -1) / 2 + "px";
  }


  initImageSlider() {
    this.timerForImageSlider = setInterval(() => {
      //the slider is placed in the middle of the draggable container
      //therefore the offset:0 is in the middle of the draggable container, not the left side of the draggable container
      let image1NewWidth = this.movingOffset.x + (this.containerNewWidth / 2);
      let image2NewWidth = (this.containerNewWidth / 2) - this.movingOffset.x;
      
      if (this.image1Element && this.image1Element.style) {
        this.image1Element.style.width = image1NewWidth + "px";
      }

      if (this.image2Element && this.image2Element.style) {
        this.image2Element.style.width = image2NewWidth + "px";
      }
    }, 5);
  }
}
