import {Component, Input} from '@angular/core';
import {Category} from '../../../core/models/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryComponent {

  @Input()
  public category: Category;

  constructor() {
  }
}
