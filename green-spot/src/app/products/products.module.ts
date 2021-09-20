import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { SharedModule } from '../shared/shared.module';
import { PaginatePipe } from '../pipes/paginate.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [
    AdminProductsComponent,
             HomeProductsComponent,
             ShowProductsComponent,
             PaginatePipe
  ],
  exports: [
    ShowProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatPaginatorModule
  ]
})
export class ProductsModule {
}
