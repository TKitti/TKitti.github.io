import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  type:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("service id in service details: " + this.route.snapshot.params.id);
  }

}
