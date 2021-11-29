import { Component, Input } from '@angular/core';
import { ISlide } from '../../../shared/types/ISlide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent  {
  @Input()
  public slides: ISlide[] = [];

  constructor() { }

}
