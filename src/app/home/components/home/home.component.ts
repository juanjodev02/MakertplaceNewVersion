import { Component, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category.model';
import { Game } from '../../../core/models/game.model';
import { News } from '../../../core/models/news.model';
import { Product } from '../../../core/models/product.model';
import { Trend } from '../../../core/models/trend.model';
import { ISlide } from '../../../shared/types/ISlide';

const mockSlides: ISlide[] = [
  {
    img: '/assets/images/ps.jpeg',
    title: 'First slide label',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    img: '/assets/images/ps.jpeg',
    title: 'Second slide label',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    img: '/assets/images/ps.jpeg',
    title: 'Third slide label',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  }
];

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: '/assets/images/nitro.jpg',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
  },
  {
    id: '2',
    name: 'Product 2',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: '/assets/images/nitro.jpg',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
  },
  {
    id: '3',
    name: 'Product 3',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: '/assets/images/nitro.jpg',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
  },
  {
    id: '4',
    name: 'Product 4',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: '/assets/images/nitro.jpg',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
  }
];

const mockTrends: Trend[] = [
  {
    name: 'Trend 1',
    imageUrl: '/assets/images/ps.jpeg',
  },
  {
    name: 'Trend 2',
    imageUrl: '/assets/images/ps.jpeg',
  },
  {
    name: 'Trend 3',
    imageUrl: '/assets/images/ps.jpeg',
  },
  {
    name: 'Trend 4',
    imageUrl: '/assets/images/ps.jpeg',
  },
];

const mockNews: News[] = [
  {
    title: 'First news',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageUrl: '/assets/images/ps.jpeg',
  },
  {
    title: 'Second news',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageUrl: '/assets/images/ps.jpeg',
  },
  {
    title: 'Third news',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageUrl: '/assets/images/ps.jpeg',
  }
];

const mockCategories: Category[] = Array.from({ length: Math.floor(Math.random() * (20 - 10 + 1)) + 10 }, (_, i) => ({
  id: i + 1,
  name: `Category ${i + 1}`,
  imageUrl: '/assets/images/ps.jpeg',
}));

const mockGames: Game[] = Array.from({ length: 6 }, (_, i) => ({
  name: `Game ${i + 1}`,
  imageUrl: '/assets/images/ps.jpeg',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  price: 100,
  discount: 50,
}));

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides: ISlide[];

  public products: Product[];

  public trends: Trend[];

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
