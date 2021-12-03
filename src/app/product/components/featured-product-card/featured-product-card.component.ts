import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-featured-product-card',
  templateUrl: './featured-product-card.component.html',
  styleUrls: ['./featured-product-card.component.scss']
})
export class FeaturedProductCardComponent {
  @Input()
  public product: Product;

  constructor() { }

}
