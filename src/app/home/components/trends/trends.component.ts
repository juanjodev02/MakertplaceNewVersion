import { Component, Input } from '@angular/core';
import { Trend } from '../../../core/models/trend.model';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent {

  @Input()
  public trends: Trend[] = [];

  constructor() { }

}
