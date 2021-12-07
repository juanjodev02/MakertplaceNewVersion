import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { mockCategories, mockProducts } from '../../../mocks/mock.data';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  public getCategories(count?: number): Observable<Category[]> {
    return new Observable((observer) => {
      observer.next(mockCategories.slice(0, count));
      observer.complete();
    });
  }

  public getProductsByCategory(
    categoryId: string,
    count?: number,
    offset = 0
  ): Observable<Product[]> {
    return new Observable((observer) => {
      if (!count) {
        const categories = mockProducts.filter(
          (product) => product.categoryId === categoryId
        );
        observer.next(categories);
      } else {
        const categories = mockProducts
          .filter((product) => product.categoryId === categoryId)
          .slice(offset, offset + count);
        if (categories.length) {
          observer.next(categories);
        } else {
          observer.error('No products found');
        }
      }
      observer.complete();
    });
  }
}
