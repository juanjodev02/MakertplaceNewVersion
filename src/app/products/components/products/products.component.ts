import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../../../core/models/product.model';
import {Category} from '../../../core/models/category.model';
import {IBreadcrumb} from "../../../shared/types/IBreadcrumb";

const mockCategories: Category[] = Array.from({length: 10}).map((_, i) => ({
  id: i + 1,
  name: `Category ${i + 1}`,
  imageUrl: `https://picsum.photos/id/${i + 1}/200/300`
}));

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: 'https://via.placeholder.com/150',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
    categoryId: 1,
  },
  {
    id: '2',
    name: 'Product 2',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: 'https://via.placeholder.com/150',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
    categoryId: 2,
  },
  {
    id: '3',
    name: 'Product 3',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: 'https://via.placeholder.com/150',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
    categoryId: 3,
  },
  {
    id: '4',
    name: 'Product 4',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: 'https://via.placeholder.com/150',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
    categoryId: 4,
  }, {
    id: '4',
    name: 'Product 4',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: 'https://via.placeholder.com/150',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
    categoryId: 4,
  }, {
    id: '4',
    name: 'Product 4',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: 'https://via.placeholder.com/150',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
    categoryId: 4,
  }, {
    id: '4',
    name: 'Product 4',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: 'https://via.placeholder.com/150',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
    categoryId: 4,
  }, {
    id: '4',
    name: 'Product 4',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: 'https://via.placeholder.com/150',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
    categoryId: 4,
  }, {
    id: '4',
    name: 'Product 4',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: 'https://via.placeholder.com/150',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
    categoryId: 4,
  }, {
    id: '4',
    name: 'Product 4',
    category: 'A',
    price: 100,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    imageItem: 'https://via.placeholder.com/150',
    photoBanner: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    storeId: '1',
    categoryId: 4,
  },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public categories: Category[];

  public breadcrumbs: IBreadcrumb[] = [
    {
      label: 'Inicio',
      url: '/'
    },
    {
      label: 'Productos',
      url: '/products'
    }
  ];

  public currentCategoryId = -1;
  private productsPerCategory = new BehaviorSubject<Product[]>([]);
  public productsPerCategory$ = this.productsPerCategory.asObservable();

  constructor(private route: ActivatedRoute){
    this.productsPerCategory.next(mockProducts);
  }

  ngOnInit(): void {
    this.categories = mockCategories;
    // Get the category id from the url
    this.route.queryParams.subscribe(params => {
      const categoryId = params['category'];
      console.log(categoryId);
      if (categoryId) {
        this.setCurrentCategory(null, +categoryId)
      }
    });
  }

  /**
   * Change the current category, and update the products
   * Here we need to fetch the products from the server
   */
  setCurrentCategory(category?: Category | null, categoryId?: number): void {
    if (categoryId) {
      this.currentCategoryId = categoryId;
      this.productsPerCategory.next(mockProducts.filter(product => product.categoryId === categoryId));
      return;
    }

    if (!category) {
      this.productsPerCategory.next(mockProducts);
      return;
    }
    if (this.currentCategoryId === category.id) {
      return;
    }
    this.currentCategoryId = category.id as number;
    this.productsPerCategory.next(mockProducts.filter(product => product.categoryId === this.currentCategoryId));
  }
}
