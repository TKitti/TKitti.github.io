import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DentalServiceModel } from '../models/DentalServiceModel';

@Injectable({
  providedIn: 'root'
})
export class DentalServiceService {

  constructor(private http: HttpClient) { }
  
  
  public getDentalServiceData(): Observable<DentalServiceModel[]> {
    return this.http.get<DentalServiceModel[]>("../../assets/dentalServicesData.json");
  }
}
