import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.scss'],
})
export class StoreProductsComponent {
  @Input()
  products: Product[];

  @Input()
  storeId: string;

  @Input()
  storeName: string;

  constructor() {}
}
