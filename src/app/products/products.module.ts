import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryComponent } from './components/category-item/category-item.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CategoriesListResponsiveComponent } from './components/categories-list-responsive/categories-list-responsive.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    CategoriesListComponent,
    CategoryComponent,
    CategoriesListResponsiveComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, CoreModule, SharedModule],
})
export class ProductsModule {}
