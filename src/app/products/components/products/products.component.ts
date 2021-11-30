import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../../../core/models/product.model';
import {Category} from '../../../core/models/category.model';
import {IBreadcrumb} from "../../../shared/types/IBreadcrumb";
import {ProductsService} from "../../../core/services/products.service";
import {CategoriesService} from "../../../core/services/categories.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public categories: Category[];

  public readonly breadcrumbs: IBreadcrumb[] = [
    {
      label: 'Inicio',
      url: '/'
    },
    {
      label: 'Productos',
      url: '/products'
    }
  ];

  private readonly productsPerPage = 20;

  private offset = 0;

  public currentCategoryId = -1;

  private productsPerCategory = new BehaviorSubject<Product[]>([]);

  public productsPerCategory$ = this.productsPerCategory.asObservable();

  public allowLoadMore = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private categoriesService: CategoriesService,
  ){
  }

  ngOnInit(): void {
    this.getCategoryIdFromUrl();
    this.fetchAllCategories();
    this.fetchProducts();
  }

  private getCategoryIdFromUrl(): void {
    this.route.queryParams.subscribe(params => {
      const categoryId = params['category'];
      if (categoryId) {
        this.setCurrentCategory(null, +categoryId)
      }
    });
  }

  private fetchAllCategories(): void {
    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  private fetchProductsByCategory(concat?: boolean): void {
    this.categoriesService
      .getProductsByCategory(this.currentCategoryId, this.productsPerPage, this.offset)
      .subscribe({
        next: (products) => {
          concat ?
            this.productsPerCategory.next([...this.productsPerCategory.value, ...products])
            :
            this.productsPerCategory.next(products);
        },
        error: () => this.allowLoadMore = false,
      });
  }

  private fetchProducts(concat?: boolean): void {
    this.productService
      .getProducts(this.productsPerPage, this.offset)
      .subscribe({
        next: (products) => {
          concat ?
            this.productsPerCategory.next([...this.productsPerCategory.value, ...products])
            :
            this.productsPerCategory.next(products);
        },
        error: () => this.allowLoadMore = false,
      });
  }

  public fetchMoreProducts(): void {
    this.offset += this.productsPerPage;
    if (this.currentCategoryId === -1) {
      this.fetchProducts(true);
    } else {
      this.fetchProductsByCategory(true);
    }
  }

  public setCurrentCategory(category?: Category | null, categoryId?: number): void {
    this.offset = 0;
    this.allowLoadMore = true;
    if (categoryId) {
      this.currentCategoryId = categoryId;
      this.fetchProductsByCategory();
      return;
    }

    if (!category) {
      this.currentCategoryId = -1;
      this.fetchProducts();
      return;
    }

    if (this.currentCategoryId === category.id) {
      return;
    }

    this.currentCategoryId = category.id;
    this.fetchProductsByCategory();
    return;
  }
}
