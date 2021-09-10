import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./home/components/landing/landing.component";
import { AdminProductsComponent } from "./products/components/admin-products/admin-products.component";
import { HomeProductsComponent } from "./products/components/home-products/home-products.component";
import { AdminStoresComponent } from "./stores/components/admin-stores/admin-stores.component";
import { LandingStoresComponent } from "./stores/components/landing-stores/landing-stores.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'products/admin',
    component: AdminProductsComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: HomeProductsComponent,
    pathMatch: 'full'
  },
  {
    path: 'store',
    component: LandingStoresComponent,
    pathMatch: 'full'
  },
  {
    path: 'store/admin',
    component: AdminStoresComponent,
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {
}