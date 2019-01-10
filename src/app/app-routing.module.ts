import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from 'src/app/product/product.component';
import { AddProductComponent } from 'src/app/add-product/add-product.component';
import { UserComponent } from 'src/app/user/user.component';
import { AddUserComponent } from 'src/app/add-user/add-user.component';
import { UpdateProductComponent } from 'src/app/update-product/update-product.component';
import { OrderComponent } from 'src/app/order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AddOrderComponent } from 'src/app/add-order/add-order.component';
import { LoginSignComponent } from 'src/app/login-sign/login-sign.component';

const routes: Routes = [
  { path: '',redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginSignComponent }, 
  { path: 'home', component: ProductComponent, data:{title:'Show Product'}},
  { path: 'add_product', component: AddProductComponent },
  { path: 'show_user', component: UserComponent },
  // { path: 'add_user', component: AddUserComponent },
  { path: 'update_product/:id', component: UpdateProductComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order_detail', component: OrderDetailComponent },
  // { path: 'add_order', component: AddOrderComponent },


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
