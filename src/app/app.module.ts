import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import * as $ from "jquery";
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    AddProductComponent,
    UserComponent,
    AddUserComponent,
    UpdateProductComponent,
    OrderComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
