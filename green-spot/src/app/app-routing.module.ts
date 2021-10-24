import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { LandingComponent } from "./home/components/landing/landing.component";
import { ProductoViewComponent } from "./products/components/producto-view/producto-view.component";
// import { ProductoViewComponent } from './components/producto-view/producto-view.component';

const routes: Routes = [
 
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule),
  },
  
  {
    path: 'store',
    loadChildren: () => import('./stores/store.module').then( m => m.StoreModule),
  },
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo:'home',
    pathMatch:'full'
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
