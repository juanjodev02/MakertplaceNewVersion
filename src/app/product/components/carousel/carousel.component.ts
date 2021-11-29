import {Component, Input} from '@angular/core';
import {IProductCarouselItem} from "../../../shared/types/IProductCarouselItem";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input()
  public images: IProductCarouselItem[] = [
    {
      imageUrl: 'https://via.placeholder.com/600',
      alt: 'Placeholder image',
    },
    {
      imageUrl: 'https://via.placeholder.com/600',
      alt: 'Placeholder image',
    },
    {
      imageUrl: 'https://via.placeholder.com/600',
      alt: 'Placeholder image',
    },
    {
      imageUrl: 'https://via.placeholder.com/600',
      alt: 'Placeholder image',
    },
  ];

  constructor() { }

}
