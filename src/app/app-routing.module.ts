import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { StoreLayoutComponent } from './shared/components/store-layout/store-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'products/:id',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'stores',
        loadChildren: () =>
          import('./stores/stores.module').then((m) => m.StoresModule),
      },
      {
        path: 'stores/:id',
        loadChildren: () =>
          import('./store/store.module').then((m) => m.StoreModule),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
