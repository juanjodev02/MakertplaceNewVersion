import { Component, Input } from '@angular/core';
import { INavBarLink } from '../../types/INavbarLink';
import {CartService} from "../../../core/services/cart.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  public productsInCartLength$: Observable<number>;

  constructor(private cartService: CartService) {
    this.productsInCartLength$ = this.cartService.cart$
      .pipe(map(products => products.length));
  }

  @Input()
  public cartNumber: number = 0;

  navBarLinks: INavBarLink[] = [
    {
      name: 'Inicio',
      url: '/home'
    },
    {
      name: 'Productos',
      url: '/products'
    },
    {
      name: 'Tiendas',
      url: '/stores'
    },
    {
      name: 'Contacto',
      url: '/contact'
    },
    {
      name: 'FAQ',
      url: '/faq'
    }
  ];

}
