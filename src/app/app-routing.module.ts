import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PriceComponent } from './components/price/price.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'service/:id', component: ServiceDetailsComponent },
  { path: 'price', component: PriceComponent }
];
