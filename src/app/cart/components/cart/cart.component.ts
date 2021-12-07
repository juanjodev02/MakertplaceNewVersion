import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/models/cart.model';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cart: Cart;

  public subTotal: number = 0;

  public shippingCost: number = 0;

  public tax: number = 0;

  public total: number = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cart) => {
      this.cart = cart;
      this.calculateSubTotal();
      this.calculateShippingCost();
      this.calculateTax();
      this.calculateTotal();
    });
  }

  private calculateSubTotal(): void {
    this.subTotal = 0;
    this.cart.items.forEach((item) => {
      this.productService.getProduct(item.productId).subscribe((product) => {
        this.subTotal += product.price * item.quantity;
      });
    });
  }

  private calculateTotal(): void {
    this.total = this.fixDecimals(this.subTotal + this.shippingCost + this.tax);
  }

  private calculateShippingCost(): void {
    this.shippingCost = this.fixDecimals(this.subTotal * 0.1);
  }

  private calculateTax(): void {
    this.tax = this.fixDecimals(this.subTotal * environment.taxPercentage);
  }

  private fixDecimals(value: number): number {
    return Number(value.toFixed(2));
  }
}
