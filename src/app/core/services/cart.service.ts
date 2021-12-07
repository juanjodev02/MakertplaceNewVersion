import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = {
    items: [],
  };
  private cartBehaviorSubject = new BehaviorSubject<Cart>(this.cart);

  public cart$ = this.cartBehaviorSubject.asObservable();

  constructor() {
    const storageData = localStorage.getItem('cart');
    if (storageData) {
      const parsedData = JSON.parse(storageData);
      this.cart = parsedData;
      this.cartBehaviorSubject.next(parsedData);
    } else {
      this.cartBehaviorSubject.next(this.cart);
    }
  }

  public removeProductFromCart(productId: string): void {
    const productIndex = this.cart.items.findIndex(
      (item) => item.productId === productId
    );
    this.cart.items.splice(productIndex, 1);
    this.cartBehaviorSubject.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  public decrementProductQuantity(productId: string): void {
    const productIndex = this.cart.items.findIndex(
      (item) => item.productId === productId
    );
    this.cart.items[productIndex].quantity--;
    this.cartBehaviorSubject.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  public addProductToCart(product: Product): void {
    const cartItem = this.cart.items.find(
      (item) => item.productId === product.id
    );
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.items.push({
        productId: product.id,
        storeId: product.storeId,
        quantity: 1,
      });
    }
    this.cartBehaviorSubject.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
