import {Store} from "../app/core/models/store.model";
import {Category} from "../app/core/models/category.model";
import {Product} from "../app/core/models/product.model";
import {News} from "../app/core/models/news.model";
import {ISlide} from "../app/shared/types/ISlide";
import {Game} from "../app/core/models/game.model";

export const mockStores: Store[] = Array.from({length: 10}, (v, k) => k).map(k => ({
  id: k,
  name: `Store ${k+1}`,
  description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  imageUrl: 'https://via.placeholder.com/300',
  coverUrl: 'https://via.placeholder.com/800x300',
  address: `Address ${k}`,
  city: `City ${k}`,
  state: `State ${k}`,
  zip: `Zip Code ${k}`,
  phone: `Phone ${k}`,
  email: `Email ${k}`,
  latitude: k,
  longitude: k,
}));

export const mockTrends: Store[] = [...mockStores].slice(0, 4);

export const mockCategories: Category[] = Array.from({length: 9}, (v, k) => k).map(k => ({
  id: k,
  name: `Category ${k+1}`,
  imageUrl: `/assets/images/_menu-${k+1}.png`,
}));

export const mockProducts: Product[] = Array.from({length: 100}, (v, k) => k).map(k => ({
  id: k,
  storeId: mockStores[Math.ceil(Math.random()*mockStores.length)-1].id,
  categoryId: mockCategories[Math.floor(Math.random()*mockCategories.length)].id,
  name: `Product ${k + 1}`,
  featured: Math.random() > 0.5,
  stars: Math.floor(Math.random()*5),
  price: k,
  discount: Math.floor(Math.random()*100),
  stock: Math.random() * 10,
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
  coverImageUrl: 'https://via.placeholder.com/300x300',
  images: Array.from({length: Math.floor(Math.random()) * 10}, () => `https://via.placeholder.com/300x300`),
}));

export const mockNews: News[] = Array.from({length: 3}, (v, k) => k).map(k => ({
  id: k,
  title: `News ${k + 1}`,
  imageUrl: 'https://via.placeholder.com/300',
  description: `Description ${k}`,
}));

export const mockSlides: ISlide[] = Array.from({length: 10}, (v, k) => k).map(k => ({
  title: 'Slide Title' + k,
  imageUrl: 'https://via.placeholder.com/800x300',
  text: 'Slide description' + k,
}));

export const mockGames: Game[] = Array.from({length: 3}, (v, k) => k).map(k => ({
  id: k,
  name: `Game ${k}`,
  description: `Description ${k}`,
  imageUrl: 'https://via.placeholder.com/300',
  price: k,
  discount: k,
}));
