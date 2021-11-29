import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './components/products/products.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {CategoryComponent} from './components/category-item/category-item.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductCardComponent,
    CategoriesListComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class ProductsModule {
}
