import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../core/models/category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {

  @Input()
  public categories: Category[];

  @Output()
  public categorySelected: EventEmitter<Category | null> = new EventEmitter<Category | null>();

  @Input()
  public currentCategoryId: number;

  constructor() {
  }

  onClickViewAll(): void {
    this.currentCategoryId = -1;
    this.categorySelected.emit(null);
  }

  onClickCategory(category: Category): void {
    this.currentCategoryId = category.id as number;
    this.categorySelected.emit(category);
  }
}
