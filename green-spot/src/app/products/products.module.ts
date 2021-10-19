import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { SharedModule } from '../shared/shared.module';
import { PaginatePipe } from '../pipes/paginate.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ProductoViewComponent  } from './components/producto-view/producto-view.component';
import { ProductsRoutingModule } from './products-routing.module';





@NgModule({
  declarations: [
    AdminProductsComponent,
             HomeProductsComponent,
             ProductoViewComponent,
                            
  ],
  exports: [
    ProductoViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatPaginatorModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {
}
