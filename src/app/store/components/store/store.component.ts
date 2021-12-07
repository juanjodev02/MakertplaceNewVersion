import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { Store } from 'src/app/core/models/store.model';
import { ProductsService } from 'src/app/core/services/products.service';
import { StoresService } from 'src/app/core/services/stores.service';
import { IBreadcrumb } from 'src/app/shared/types/IBreadcrumb';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  public products: Product[] = [];

  public store: Store;

  public breadcrumbs: IBreadcrumb[];

  private readonly productsPerPage = 20;

  private offset = 0;

  public allowLoadMoreProducts: boolean = true;

  constructor(
    private productService: ProductsService,
    private storesService: StoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getStoreIdFromUrl();
    this.fetchProducts();
    this.generateBreadcrumbs();
  }

  private getStoreIdFromUrl() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.fetchStore(id);
    });
  }

  private fetchProducts(): void {
    this.storesService
      .getProductsByStore(this.store.id, this.productsPerPage, this.offset)
      .subscribe((products) => {
        products.length
          ? this.products.push(...products)
          : (this.allowLoadMoreProducts = false);
      });
  }

  private fetchStore(id: string): void {
    this.storesService.getStore(id).subscribe((store) => {
      this.store = store;
    });
  }

  private generateBreadcrumbs(): void {
    this.breadcrumbs = [
      {
        label: 'Inicio',
        url: '/',
      },
      {
        label: 'Tiendas',
        url: '/stores',
      },
      {
        label: this.store.name,
        url: `/stores/${this.store.id}`,
      },
    ];
  }

  public loadMoreProducts(): void {
    this.offset += this.productsPerPage;
    this.fetchProducts();
  }
}
