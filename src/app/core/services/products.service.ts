import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { mockProducts } from '../../../mocks/mock.data';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  public getProducts(count?: number, offset = 0): Observable<Product[]> {
    return new Observable((observer) => {
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

  public getProduct(productId: string): Observable<Product> {
    return new Observable((observer) => {
      const product = mockProducts.find((product) => product.id === productId);
      if (product) {
        observer.next(product);
      } else {
        observer.error('No product found');
      }
      observer.complete();
    });
  }

  public getFeaturedProducts(
    count?: number,
    offset = 0
  ): Observable<Product[]> {
    return new Observable((observer) => {
      if (!count) {
        observer.next(mockProducts.filter((product) => product.featured));
      } else {
        const products = mockProducts
          .filter((product) => product.featured)
          .slice(offset, offset + count);
        if (products.length) {
          observer.next(products);
        } else {
          observer.error('No featured products found');
        }
      }
      observer.complete();
    });
  }
}
