import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { StoreModule } from '../stores/store.module';
import { HomeRoutingModule } from './home-routing.module';




@NgModule({
  declarations: [
    LandingComponent,
    // ShowProductsComponent
  ],
  exports: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
