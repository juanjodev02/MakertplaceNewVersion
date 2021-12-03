import {Component} from '@angular/core';
import {Store} from '../../../core/models/store.model';
import {IBreadcrumb} from "../../../shared/types/IBreadcrumb";
import {mockStores} from "../../../../mocks/mock.data";
import {StoresService} from "../../../core/services/stores.service";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent  {

  private title = 'Tiendas | Zwippe Marketplace';

  public stores: Store[];

  public breadcrumbs: IBreadcrumb[] = [
    {
      label: 'Inicio',
      url: '/',
    },
    {
      label: 'Tiendas',
      url: '/stores'
    }
  ];

  constructor(
    private storesService: StoresService,
    private titleService: Title,
    private metaTagService: Meta,
    ) {
    this.getStores();
    this.setupPageMetadata();
  }

  private setupPageMetadata(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Zwippe Marketplace Stores' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'juanjodev02@zwippe-technologies' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-11-30', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

  private getStores(): void {
    this.storesService.getStores().subscribe(stores => {
      this.stores = stores;
    });
  }
}
