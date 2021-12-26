import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DentalServiceService } from 'src/app/services/dental-service.service';
import { DentalServiceModel } from 'src/app/models/DentalServiceModel';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  currentService: DentalServiceModel;

  constructor(private route: ActivatedRoute, private dentalService: DentalServiceService) { }

  ngOnInit() {
    this.dentalService.getDentalServiceData().subscribe(data => {
      this.currentService = data.find(service => service.id == this.route.snapshot.params.id);
    });
  }
}
