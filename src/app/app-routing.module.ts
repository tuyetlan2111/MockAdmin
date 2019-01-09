import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from 'src/app/product/product.component';
import { AddProductComponent } from 'src/app/add-product/add-product.component';
import { UserComponent } from 'src/app/user/user.component';
import { AddUserComponent } from 'src/app/add-user/add-user.component';
import { UpdateProductComponent } from 'src/app/update-product/update-product.component';
import { OrderComponent } from 'src/app/order/order.component';

const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full' },
  { path: 'show_product', component: ProductComponent },
  { path: 'add_product', component: AddProductComponent },
  { path: 'show_user', component: UserComponent },
  { path: 'add_user', component: AddUserComponent },
  { path: 'update_product', component: UpdateProductComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
