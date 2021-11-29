import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../../core/models/product.model";
import {IBreadcrumb} from "../../../shared/types/IBreadcrumb";

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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: Product;

  public breadcrumbs: IBreadcrumb[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      const product = this.getProduct(Number(id));
      if (!product) {
        this.router.navigate(['/products']);
        return;
      }
      this.product = product;
      this.breadcrumbs = this.getBreadcrumb();
    });
  }

  private getProduct(productId: number): Product | undefined {
    return mockProducts.find(product => Number(product.id) === productId);
  }

  private getBreadcrumb(): IBreadcrumb[] {
    return [
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

  public addToCart() {}

}
