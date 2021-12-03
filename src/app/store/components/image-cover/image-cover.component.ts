import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-cover',
  templateUrl: './image-cover.component.html',
  styleUrls: ['./image-cover.component.scss']
})
export class ImageCoverComponent {
  @Input()
  imageUrl: string;

  @Input()
  altText: string;

  constructor() { }

}
