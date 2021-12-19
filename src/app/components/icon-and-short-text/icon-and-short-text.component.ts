import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-and-short-text',
  templateUrl: './icon-and-short-text.component.html',
  styleUrls: ['./icon-and-short-text.component.css']
})
export class IconAndShortTextComponent implements OnInit {
  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
