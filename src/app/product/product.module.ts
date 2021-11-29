import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import {SharedModule} from "../shared/shared.module";
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    ProductComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
