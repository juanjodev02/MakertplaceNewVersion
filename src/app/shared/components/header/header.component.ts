import { Component, Input } from '@angular/core';
import { INavBarLink } from '../../types/INavbarLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor() { }

  @Input()
  public cartNumber: number = 0;

  navBarLinks: INavBarLink[] = [
    {
      name: 'Inicio',
      url: '/home'
    },
    {
      name: 'Productos',
      url: '/products'
    },
    {
      name: 'Tiendas',
      url: '/stores'
    },
    {
      name: 'Contacto',
      url: '/contact'
    },
    {
      name: 'FAQ',
      url: '/faq'
    }
  ];

}
