import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProuctComponent } from './component/product/home-prouct/home-prouct.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { UpdateProductComponent } from './component/product/update-product/update-product.component';

const routes: Routes = [
  {path:'',component:HomeProuctComponent},
  {path:'add',component:AddProductComponent},
  {path:'update/:id',component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
