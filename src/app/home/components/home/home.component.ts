import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category.model';
import { Game } from '../../../core/models/game.model';
import { News } from '../../../core/models/news.model';
import { Product } from '../../../core/models/product.model';
import { Trend } from '../../../core/models/trend.model';
import { ISlide } from '../../../shared/types/ISlide';
import {mockCategories, mockGames, mockNews, mockProducts, mockSlides, mockTrends} from "../../../../mocks/mock.data";
import {Store} from "../../../core/models/store.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides: ISlide[];

  public products: Product[];

  public trends: Store[];

  public news: News[];

  public categories: Category[];

  public games: Game[];

  constructor() { }

  ngOnInit(): void {
    this.slides = mockSlides;
    this.products = mockProducts;
    this.trends = mockTrends;
    this.news = mockNews;
    this.categories = mockCategories;
    this.games = mockGames;
  }

}
