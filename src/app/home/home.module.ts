import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { CoreModule } from '../core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { NewsComponent } from './components/news/news.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { InfoBannerComponent } from './components/info-banner/info-banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { GamesComponent } from './components/games/games.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CarouselComponent,
    HomeComponent,
    FeaturedProductsComponent,
    NewsComponent,
    NewsCardComponent,
    InfoBannerComponent,
    CategoriesComponent,
    CategoryCardComponent,
    GamesComponent,
    GameCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    MatIconModule,
    SharedModule,
  ],
})
export class HomeModule {}
