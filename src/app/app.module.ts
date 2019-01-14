import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import * as $ from "jquery";
import { HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { LoginSignComponent } from './login-sign/login-sign.component';
import { ArtistComponent } from './artist/artist.component';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { UpdateArtistComponent } from './update-artist/update-artist.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    AddProductComponent,
    UserComponent,
    UpdateProductComponent,
    OrderComponent,
    OrderDetailComponent,
    LoginSignComponent,
    ArtistComponent,
    AddArtistComponent,
    UpdateArtistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
