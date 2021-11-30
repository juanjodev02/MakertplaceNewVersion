import {Component} from '@angular/core';
import {Store} from '../../../core/models/store.model';
import {IBreadcrumb} from "../../../shared/types/IBreadcrumb";
import {mockStores} from "../../../../mocks/mock.data";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent  {

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

  constructor() {
    this.stores = mockStores;
  }
}
