import { Component, Input } from '@angular/core';
import { Trend } from '../../../core/models/trend.model';

@Component({
  selector: 'app-trend-card',
  templateUrl: './trend-card.component.html',
  styleUrls: ['./trend-card.component.scss']
})
export class TrendCardComponent {

  @Input()
  public trend: Trend;

  constructor() { }

}
