import { Component, Input } from '@angular/core';
import { INavBarLink } from '../../types/INavbarLink';

@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.scss']
})
export class ResponsiveMenuComponent  {

  @Input()
  public cartNumber: number = 0;

  @Input()
  public navBarLinks: INavBarLink[] = [];

  constructor() { }

}
