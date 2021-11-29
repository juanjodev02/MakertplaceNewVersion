import {Component, Input} from '@angular/core';
import {Store} from '../../../core/models/store.model';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent  {
  @Input()
  store: Store;

  constructor() {
  }

}
