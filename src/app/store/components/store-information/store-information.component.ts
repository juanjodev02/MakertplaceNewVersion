import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-store-information',
  templateUrl: './store-information.component.html',
  styleUrls: ['./store-information.component.scss'],
})
export class StoreInformationComponent {
  @Input()
  storeDescription: string;

  @Input()
  storeName: string;

  @Input()
  storeAddress: string;

  @Input()
  storePhone: string;

  @Input()
  storeImage: string;

  constructor() {}
}
