import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoresComponent} from './components/stores/stores.component';
import {StoresRoutingModule} from './stores-routing.module';
import { StoreCardComponent } from './components/store-card/store-card.component';
import { WorkWithUsBannerComponent } from './components/work-with-us-banner/work-with-us-banner.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [StoresComponent, StoreCardComponent, WorkWithUsBannerComponent],
  imports: [
    CommonModule,
    StoresRoutingModule,
    SharedModule,
  ]
})
export class StoresModule {
}
