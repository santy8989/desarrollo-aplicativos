import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { HomeProductsComponent } from "./components/home-products/home-products.component";
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductoViewComponent } from './components/producto-view/producto-view.component';


const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'products',
        component: HomeProductsComponent,
      },
      {
        path: 'products/admin',
        component: AdminProductsComponent,
        pathMatch: 'full'
      },
      {
        path: 'products/view/:id',
        component: ProductoViewComponent,
        pathMatch: 'full'
      },
      
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
