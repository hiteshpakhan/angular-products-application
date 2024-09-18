import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './components/my-first-comp/my-first-comp.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './components/message-details/message-details.component';
import { MyfirstService } from './components/services/myfirst.service';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomebaseComponent } from './components/homebase/homebase.component';
// import { MessageTableComponent } from './components/message-table/message-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent,
    ProductsComponent,
    NewProductComponent,
    ProductDetailsComponent,
    HomebaseComponent,
    // MessageTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MyfirstService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
