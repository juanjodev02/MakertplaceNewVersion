import { Component, Input } from '@angular/core';
import { Store } from 'src/app/core/models/store.model';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent {

  @Input()
  public trends: Store[] = [];

  constructor() { }

}
