import { Component, Input } from '@angular/core';
import { News } from '../../../core/models/news.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input()
  public news?: News;

  constructor() { }

}
