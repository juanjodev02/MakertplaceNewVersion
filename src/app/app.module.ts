import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {HomeModule} from "./home/home.module";
import {MaterialModule} from "./material/material.module";
import {ProductsModule} from "./products/products.module";
import {SharedModule} from "./shared/shared.module";
import {StoresModule} from "./stores/stores.module";
import {RouterModule} from "@angular/router";
import {ProductModule} from "./product/product.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule,
    HomeModule,
    MaterialModule,
    ProductsModule,
    SharedModule,
    StoresModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
