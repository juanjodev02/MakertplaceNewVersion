import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../models/store.model';
import { mockProducts, mockStores } from '../../../mocks/mock.data';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  constructor() {}

  public getStores(): Observable<Store[]> {
    return new Observable<Store[]>((observer) => {
      observer.next(mockStores);
    });
  }

  public getStore(id: number, includeProducts?: boolean): Observable<Store> {
    return new Observable<Store>((observer) => {
      observer.next(mockStores.find((store) => store.id === id));
    });
  }

  public getProductsByStore(
    storeId: number,
    count: number,
    offset: number
  ): Observable<Product[]> {
    return new Observable<Product[]>((observer) => {
      observer.next(
        mockProducts
          .filter((product) => product.storeId === storeId)
          .slice(offset, offset + count)
      );
    });
  }

  public getTrends(count?: number): Observable<Store[]> {
    return new Observable<Store[]>((observer) => {
      observer.next(mockStores.slice(0, count));
    });
  }
}
