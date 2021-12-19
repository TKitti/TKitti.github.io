import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
