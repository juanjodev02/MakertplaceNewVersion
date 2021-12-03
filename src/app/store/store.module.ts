import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './components/store/store.component';
import { ImageCoverComponent } from './components/image-cover/image-cover.component';
import { SharedModule } from '../shared/shared.module';
import { StoreInformationComponent } from './components/store-information/store-information.component';
import { StoreProductsComponent } from './components/store-products/store-products.component';


@NgModule({
  declarations: [
    StoreComponent,
    ImageCoverComponent,
    StoreInformationComponent,
    StoreProductsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
