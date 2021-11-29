import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent  {

  @Input()
  public sectionName: string;

  @Input()
  public sectionCaption?: string | undefined;

  @Input()
  public sectionLink: string;

  constructor() { }

}
