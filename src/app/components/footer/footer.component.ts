import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  infoOpeningHours = { 
    image: "clock",
    imageSrc: "../../../assets/clock.png",
    firstLine: "Nyitvatartás", 
    secondLine: "Péntek", 
    thirdLine: "15:00 - 21:00" 
  }

  infoPhone = { 
    image: "phone",
    imageSrc: "../../../assets/phone.png",
    firstLine: "Hívj minket!", 
    secondLine: "+36 30 844 5446", 
    thirdLine: "" 
  }

  infoEmail = { 
    image: "email",
    imageSrc: "../../../assets/email.png",
    firstLine: "Írj nekünk!", 
    secondLine: "Dentalhygiene-Budapest@gmail.com", 
    thirdLine: "" 
  }

  constructor() { }

  ngOnInit() {
  }

}
