import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit
{

  @Input()
  public products: Product[] = []

  constructor() {
  }

  ngOnInit() {
    this.products = this.products.slice(0, 4);
  }

}
