import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inBounds = true;
  movingOffset = { x: 0, y: 0 };
  endOffset = { x: 0, y: 0 };
  timerForImageSlider;
  imageURL1 = './../assets/photo1.jfif';
  imageURL2 = './../assets/photo2.jfif';


  constructor() {}


  ngOnInit() {
    //show images half-half on initialization of the website
    this.crop(this.imageURL1, 0.5).then(canvas => {
      document.getElementById("imageSliderDragContainer").appendChild(canvas);
    });
    this.crop2(this.imageURL2, 0.5).then(canvas => {
      document.getElementById("imageSliderDragContainer").appendChild(canvas);
    });
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
    let container = document.getElementById("imageSliderDragContainer");
    let percentage = 0.05;
    
    this.timerForImageSlider = setInterval(() => {
      percentage = this.movingOffset.x / 400;
      
      this.removeChildren(container);
      this.crop(this.imageURL1, percentage).then(canvas => {
        container.appendChild(canvas);
      });
      this.crop2(this.imageURL2, (1 - percentage)).then(canvas => {
        container.appendChild(canvas);
      });  
    }, 100);
  }



  crop(url, aspectRatio): Promise<Node> {
  
    return new Promise(resolve => {
  
    // this image will hold our source image data
    const inputImage = new Image();
  
    // we want to wait for our image to load
    inputImage.onload = () => {
  
    // let's store the width and height of our image
    const inputWidth = inputImage.naturalWidth;
    const inputHeight = inputImage.naturalHeight;
  
    // get the aspect ratio of the input image
    const inputImageAspectRatio = inputWidth / inputHeight;
  
    // if it's bigger than our target aspect ratio
    let outputWidth = inputWidth;
    let outputHeight = inputHeight;
    outputWidth = inputWidth * aspectRatio;
    let dX = inputWidth * (1-aspectRatio);
  
    // calculate the position to draw the image at
    const outputX = (outputWidth - inputWidth) * .5;
    const outputY = (outputHeight - inputHeight) * .5;
  
    // create a canvas that will present the output image
    const outputImage = document.createElement('canvas');
  
    // set it to the same size as the image
    outputImage.width = outputWidth;
    outputImage.height = outputHeight;
  
    // draw our image at position 0, 0 on the canvas
    const ctx = outputImage.getContext('2d');
    ctx.drawImage(inputImage, 0, outputY, outputWidth, outputHeight, 0, outputY, outputWidth, outputHeight);
    resolve(outputImage);
    };
  
    // start loading our image
    inputImage.src = url;

    
    });
  };

  crop2(url, aspectRatio): Promise<Node> {
  
    return new Promise(resolve => {
  
    // this image will hold our source image data
    const inputImage = new Image();
  
    // we want to wait for our image to load
    inputImage.onload = () => {
  
    // let's store the width and height of our image
    const inputWidth = inputImage.naturalWidth;
    const inputHeight = inputImage.naturalHeight;
  
    // get the aspect ratio of the input image
    const inputImageAspectRatio = inputWidth / inputHeight;
  
    // if it's bigger than our target aspect ratio
    let outputWidth = inputWidth;
    let outputHeight = inputHeight;
    outputWidth = inputWidth * aspectRatio;
    let dX = inputWidth * (1-aspectRatio);
  
    // calculate the position to draw the image at
    const outputX = (outputWidth - inputWidth) * .5;
    const outputY = (outputHeight - inputHeight) * .5;
  
    // create a canvas that will present the output image
    const outputImage = document.createElement('canvas');
  
    // set it to the same size as the image
    outputImage.width = outputWidth;
    outputImage.height = outputHeight;
  
    // draw our image at position 0, 0 on the canvas
    const ctx = outputImage.getContext('2d');
    ctx.drawImage(inputImage, dX, outputY, outputWidth, outputHeight, 0, outputY, outputWidth, outputHeight);
    resolve(outputImage);
    };
  
    // start loading our image
    inputImage.src = url;
    });
  
  };
}
