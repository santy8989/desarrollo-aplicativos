import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';




@NgModule({
  declarations: [
   
  
    AdminProductsComponent,
             HomeProductsComponent
  ],
  exports: [
  
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ProductsModule {
}
