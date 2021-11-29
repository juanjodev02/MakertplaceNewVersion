import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ResponsiveMenuComponent } from './components/responsive-menu/responsive-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreLayoutComponent } from './components/store-layout/store-layout.component';
import {ActionsComponent} from './components/actions/actions.component';
import {BannerComponent} from './components/banner/banner.component';
import {MaterialModule} from "../material/material.module";
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ResponsiveMenuComponent,
    FooterComponent,
    StoreLayoutComponent,
    ActionsComponent,
    BannerComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [LayoutComponent, HeaderComponent, StoreLayoutComponent, BreadcrumbComponent]
})
export class SharedModule { }
