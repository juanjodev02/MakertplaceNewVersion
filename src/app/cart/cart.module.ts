import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { ProductsResumeComponent } from './components/products-resume/products-resume.component';
import { MapComponent } from './components/map/map.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { ProductsResumeCardComponent } from './components/products-resume-card/products-resume-card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CartComponent,
    ProductsResumeComponent,
    MapComponent,
    PaymentOptionsComponent,
    ProductsResumeCardComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAt208EXsvPJI4trTWzrLtp3lqdUKVI6ow',
      libraries: ['places', 'geocoder'],
    }),
  ],
})
export class CartModule {}
