import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public productsInCartLength$: Observable<number>;

  constructor(private cartService: CartService) {
    this.productsInCartLength$ = this.cartService.cart$.pipe(
      map((cart) => cart.items.reduce((acc, item) => acc + item.quantity, 0))
    );
  }
}
