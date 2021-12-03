import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoresComponent} from './components/stores/stores.component';

const routes: Routes = [
  {
    path: '',
    component: StoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule {
}
