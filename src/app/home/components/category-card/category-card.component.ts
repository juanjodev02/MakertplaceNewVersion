import { Component, Input } from '@angular/core';
import { Category } from '../../../core/models/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {

  @Input()
  public category: Category;

  constructor() { }

}
