import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstCompComponent } from './components/my-first-comp/my-first-comp.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { HomebaseComponent } from './components/homebase/homebase.component';

const routes: Routes = [
  {path:'', component:HomebaseComponent},
  {path:'home', component:HomebaseComponent},
  {path:'form', component:MyFirstCompComponent},
  {path:'about', component:AboutComponent},
  {path:'about/:username', component:AboutComponent},
  {path:'products', component:ProductsComponent},
  {path:'new-product', component:NewProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
