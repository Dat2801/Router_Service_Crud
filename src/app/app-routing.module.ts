import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProductComponent} from './list-product/list-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';


const router: Routes = [
  {
    path: '',
    component: ListProductComponent
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'update/:id',
    component: UpdateProductComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
