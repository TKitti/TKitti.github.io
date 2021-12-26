import { Component, OnInit } from '@angular/core';
import { DentalServiceModel } from '../../models/DentalServiceModel';
import { DentalServiceService } from 'src/app/services/dental-service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: DentalServiceModel[] = [];

  constructor(private dentalService: DentalServiceService) {}

  ngOnInit() {
    this.dentalService.getDentalServiceData().subscribe(data => {
      this.services = data;
    });
  }
}
