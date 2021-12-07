import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../core/models/product.model';
import { Category } from '../../../core/models/category.model';
import { IBreadcrumb } from '../../../shared/types/IBreadcrumb';
import { ProductsService } from '../../../core/services/products.service';
import { CategoriesService } from '../../../core/services/categories.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  private title = 'Productos | Zwippe Marketplace';

  public categories: Category[];

  public readonly breadcrumbs: IBreadcrumb[] = [
    {
      label: 'Inicio',
      url: '/',
    },
    {
      label: 'Productos',
      url: '/products',
    },
  ];

  private readonly productsPerPage = 20;

  private offset = 0;

  public currentCategoryId = '-1';

  public currentCategoryIdResponsive = '-1';

  private productsPerCategory = new BehaviorSubject<Product[]>([]);

  public productsPerCategory$ = this.productsPerCategory.asObservable();

  public allowLoadMore = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private categoriesService: CategoriesService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit(): void {
    this.getCategoryIdFromUrl();
    this.fetchAllCategories();
    this.fetchProducts();
    this.setupPageMetadata();
  }

  private setupPageMetadata(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Zwippe Marketplace Products' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'juanjodev02@zwippe-technologies' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-11-30', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }

  private getCategoryIdFromUrl(): void {
    this.route.queryParams.subscribe((params) => {
      const categoryId = params['category'];
      if (categoryId) {
        this.setCurrentCategory(null, categoryId);
      }
    });
  }

  private fetchAllCategories(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  private fetchProductsByCategory(concat?: boolean): void {
    this.categoriesService
      .getProductsByCategory(
        this.currentCategoryId,
        this.productsPerPage,
        this.offset
      )
      .subscribe({
        next: (products) => {
          concat
            ? this.productsPerCategory.next([
                ...this.productsPerCategory.value,
                ...products,
              ])
            : this.productsPerCategory.next(products);
        },
        error: () => (this.allowLoadMore = false),
      });
  }

  private fetchProducts(concat?: boolean): void {
    this.productService
      .getProducts(this.productsPerPage, this.offset)
      .subscribe({
        next: (products) => {
          concat
            ? this.productsPerCategory.next([
                ...this.productsPerCategory.value,
                ...products,
              ])
            : this.productsPerCategory.next(products);
        },
        error: () => (this.allowLoadMore = false),
      });
  }

  public fetchMoreProducts(): void {
    this.offset += this.productsPerPage;
    if (this.currentCategoryId === '-1') {
      this.fetchProducts(true);
    } else {
      this.fetchProductsByCategory(true);
    }
  }

  public setCurrentCategory(
    category?: Category | null,
    categoryId?: string
  ): void {
    this.offset = 0;
    this.allowLoadMore = true;
    if (categoryId) {
      this.currentCategoryId = categoryId;
      this.fetchProductsByCategory();
      return;
    }

    if (!category) {
      this.currentCategoryId = '-1';
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

  public onChangeResponsiveCategory(): void {
    console.log(this.currentCategoryIdResponsive);
    this.setCurrentCategory(null, this.currentCategoryIdResponsive);
  }
}
