import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category.model';
import { Game } from '../../../core/models/game.model';
import { News } from '../../../core/models/news.model';
import { Product } from '../../../core/models/product.model';
import { Meta, Title } from '@angular/platform-browser';
import { ISlide } from '../../../shared/types/ISlide';
import { Store } from "../../../core/models/store.model";
import { ProductsService } from "../../../core/services/products.service";
import { StoresService } from "../../../core/services/stores.service";
import { NewsService } from "../../../core/services/news.service";
import { CategoriesService } from "../../../core/services/categories.service";
import { AdsService } from "../../../core/services/ads.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private title = 'Inicio | Zwippe Marketplace';

  public slides: ISlide[];

  public products: Product[];

  public trends: Store[];

  public news: News[];

  public categories: Category[];

  constructor(
    private metaTagService:Meta,
    private titleService: Title,
    private productService: ProductsService,
    private storesService: StoresService,
    private newsService: NewsService,
    private categoriesService: CategoriesService,
    private slidesService: AdsService,
  ) { }

  ngOnInit(): void {
    this.fetchFeaturedProducts();
    this.fetchTrendStores();
    this.fetchNews();
    this.fetchCategories();
    this.setupPageMetadata();
    this.fetchSlides();
  }

  private setupPageMetadata(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Zwippe Marketplace Home' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'juanjodev02@zwippe-technologies' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-11-30', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

  private fetchSlides(): void {
    this.slidesService.getMainSlides().subscribe({
      next: (slides: ISlide[]) => {
        this.slides = slides;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  private fetchCategories(): void {
    this.categoriesService.getCategories().subscribe({
      next: (categories: Category[]) => {
        this.categories = categories;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  private fetchNews(): void {
    this.newsService.getNews().subscribe({
      next: (news: News[]) => {
        this.news = news;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  private fetchFeaturedProducts(): void {
    this.productService.getFeaturedProducts(4).subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  private fetchTrendStores(): void {
    this.storesService.getTrends(4).subscribe({
      next: (stores: Store[]) => {
        this.trends = stores;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
