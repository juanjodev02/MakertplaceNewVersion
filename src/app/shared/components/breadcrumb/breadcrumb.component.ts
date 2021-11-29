import {Component, Input} from '@angular/core';
import {IBreadcrumb} from "../../types/IBreadcrumb";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  @Input()
  public breadcrumbs: IBreadcrumb[];

  constructor() { }

}
