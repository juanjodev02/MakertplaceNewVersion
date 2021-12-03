import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-categories-list-responsive',
  templateUrl: './categories-list-responsive.component.html',
  styleUrls: ['./categories-list-responsive.component.scss']
})
export class CategoriesListResponsiveComponent {
  @Input()
  public categories: Category[];

  @Input()
  public currentCategoryId: number;

  @Output()
  public categorySelected: EventEmitter<Category | null> = new EventEmitter<Category | null>();

  constructor() { }

  onChangeResponsiveCategory(event: any): void {
    const categoryId = event.target.value;
    const category = this.categories.find(category => category.id == categoryId);
    this.categorySelected.emit(category);
  }
}
