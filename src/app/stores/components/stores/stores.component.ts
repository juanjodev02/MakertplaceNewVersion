import {Component} from '@angular/core';
import {Store} from '../../../core/models/store.model';
import {IBreadcrumb} from "../../../shared/types/IBreadcrumb";

const mockStores: Store[] = [
  {
    id: 1,
    name: 'Store 1',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Store 2',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Store 3',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Store 4',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Store 5',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Store 6',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Store 7',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Store 8',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Store 9',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Store 10',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

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
