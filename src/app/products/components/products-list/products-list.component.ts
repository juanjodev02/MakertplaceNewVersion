import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../../core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent  {

  @Input()
  public products$: Observable<Product[]>;

  constructor() {
  }

}
