import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../core/models/category.model';

// TODO: Fix content height issue

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input()
  public categories: Category[] = [];

  // [desktop, tablet, mobile]
  public readonly itemsPerSlide: [number, number, number] = [9, 6, 4];

  public pages: [number, number, number];

  public pagesIteratorHelper: [number[], number[], number[]]  = [[], [], []];

  constructor() {}

  ngOnInit(): void {
    this.pages = [
      Math.ceil(this.categories.length / this.itemsPerSlide[0]),
      Math.ceil(this.categories.length / this.itemsPerSlide[1]),
      Math.ceil(this.categories.length / this.itemsPerSlide[2])
    ];
    this.pagesIteratorHelper[0] = Array(this.pages[0]).fill(0).map((x, i) => i);
    this.pagesIteratorHelper[1] = Array(this.pages[1]).fill(0).map((x, i) => i);
    this.pagesIteratorHelper[2] = Array(this.pages[2]).fill(0).map((x, i) => i);
    console.log(this.pagesIteratorHelper);
  }
}
