import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductListComponent} from "./page/product/product-list.component";
import {ProductFormComponent} from "./page/product/product-form.component";

const routes: Routes = [
  {
    path: 'produtos',
    component: ProductListComponent
  },
  {
    path: 'produtos/form',
    component: ProductFormComponent
  },
  {
    path: 'produtos/form/:id',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
