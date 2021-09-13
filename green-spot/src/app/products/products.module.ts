import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AdminProductsComponent,
             HomeProductsComponent,
             ShowProductsComponent
  ],
  exports: [
    ShowProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class ProductsModule {
}
