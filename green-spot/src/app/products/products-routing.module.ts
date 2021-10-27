import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductoViewComponent } from './components/producto-view/producto-view.component';
import { LoginGuard } from '../shared/guards/LoginGuard';
import { AdminGuard } from '../shared/guards/AdminGuard';

const routes: Routes = [
  {
    path:'',
    component:HomeProductsComponent,
  },
  {
    path:'admin',
    component:AdminProductsComponent,
    canActivate: [LoginGuard, AdminGuard]
    
  },
  {
  path:'view/:id',
  component:ProductoViewComponent
  }
    
  
    
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ], providers:[
    LoginGuard,AdminGuard
  ]
})
export class ProductsRoutingModule { }
