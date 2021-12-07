import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products-resume-card',
  templateUrl: './products-resume-card.component.html',
  styleUrls: ['./products-resume-card.component.scss'],
})
export class ProductsResumeCardComponent implements OnInit {
  @Input()
  public productId: string;

  @Input()
  public quantity: number;

  public product$: Observable<Product>;

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.product$ = this.productService.getProduct(this.productId);
  }

  public increment(product: Product) {
    this.cartService.addProductToCart(product);
  }

  public decrement() {
    if (this.quantity > 1) {
      this.cartService.decrementProductQuantity(this.productId);
    }
  }

  public deleteProduct() {
    this.cartService.removeProductFromCart(this.productId);
  }
}
