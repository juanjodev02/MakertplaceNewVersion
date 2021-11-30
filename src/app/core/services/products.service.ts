import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "../models/product.model";
import {mockProducts} from "../../../mocks/mock.data";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getProducts(count?: number, offset = 0): Observable<Product[]> {
    return new Observable(observer => {
      if (!count) {
        observer.next(mockProducts);
      } else {
        const products = mockProducts.slice(offset, offset + count);
        if (products.length) {
          observer.next(products);
        } else {
          observer.error('No products found');
        }
      }
      observer.complete();
    });
  }
}
