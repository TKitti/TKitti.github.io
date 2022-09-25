import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PriceModel } from "../models/PriceModel";

@Injectable({
  providedIn: "root",
})
export class PriceService {
  constructor(private http: HttpClient) {}

  public getPriceData(): Observable<PriceModel[]> {
    return this.http.get<PriceModel[]>("../../assets/pricesData.json");
  }

  public getPackagePriceData(): Observable<PriceModel[]> {
    return this.http.get<PriceModel[]>("../../assets/packagePricesData.json");
  }
}
