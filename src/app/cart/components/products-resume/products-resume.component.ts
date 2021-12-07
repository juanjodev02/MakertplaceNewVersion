import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-products-resume',
  templateUrl: './products-resume.component.html',
  styleUrls: ['./products-resume.component.scss'],
})
export class ProductsResumeComponent {
  @Input()
  public cart: Cart | null;

  @Input()
  public subTotal: number;

  @Input()
  public shippingCost: number;

  @Input()
  public tax: number;

  @Input()
  public total: number;

  constructor() {}
}
