import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { ProductsResumeComponent } from './components/products-resume/products-resume.component';
import { MapComponent } from './components/map/map.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';


@NgModule({
  declarations: [
    CartComponent,
    ProductsResumeComponent,
    MapComponent,
    PaymentOptionsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
