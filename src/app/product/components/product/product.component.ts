import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../../core/models/product.model";
import {IBreadcrumb} from "../../../shared/types/IBreadcrumb";
import {mockProducts} from "../../../../mocks/mock.data";

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
    return mockProducts.find(product => product.id === productId);
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
