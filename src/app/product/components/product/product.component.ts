import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { IBreadcrumb } from '../../../shared/types/IBreadcrumb';
import { ProductsService } from '../../../core/services/products.service';
import { CartService } from '../../../core/services/cart.service';
import { Meta, Title } from '@angular/platform-browser';
import { StoresService } from 'src/app/core/services/stores.service';
import { Store } from 'src/app/core/models/store.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  private title: string;

  public product: Product;

  public featuredProducts: Product[];

  public trends: Store[];

  public breadcrumbs: IBreadcrumb[];

  private storeData: { storeId?: string; storeName?: string } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta,
    private productService: ProductsService,
    private cartService: CartService,
    private storesService: StoresService
  ) {}

  ngOnInit(): void {
    this.getDataFromUrl();
    this.getBreadcrumb();
    this.getFeaturedProducts();
    this.title = `${this.product.name} | Zwippe Marketplace`;
    this.setupPageMetadata();
    this.getTrendsStores();
  }

  private setupPageMetadata(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: `Zwippe Marketplace ${this.product.name}` },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'juanjodev02@zwippe-technologies' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-11-30', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }

  private getDataFromUrl() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchProduct(id);
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.storeData.storeId = params['storeId'];
      this.storeData.storeName = params['storeName'];
    });
  }

  private fetchProduct(productId: string): void {
    this.productService.getProduct(productId).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: () => this.router.navigate(['/products']),
    });
  }

  private getFeaturedProducts(): void {
    this.productService.getFeaturedProducts(6).subscribe({
      next: (products) => {
        this.featuredProducts = products;
      },
      error: () => this.router.navigate(['/products']),
    });
  }

  private getBreadcrumb(): void {
    if (this.storeData.storeId && this.storeData.storeName) {
      this.breadcrumbs = [
        { label: 'Home', url: '/' },
        { label: 'Tiendas', url: `/stores` },
        {
          label: this.storeData.storeName,
          url: `/stores/${this.storeData.storeId}`,
        },
        { label: this.product.name, url: `/products/${this.product.id}` },
      ];
    } else {
      this.breadcrumbs = [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'Products',
          url: '/products',
        },
        {
          label: this.product.name,
          url: `/products/${this.product.id}`,
        },
      ];
    }
  }

  private getTrendsStores(): void {
    this.storesService.getTrends(4).subscribe({
      next: (stores) => {
        this.trends = stores;
      },
      error: () => this.router.navigate(['/products']),
    });
  }

  public addToCart() {
    this.cartService.addProductToCart(this.product);
  }
}
