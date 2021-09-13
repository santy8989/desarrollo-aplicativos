import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [
    LandingComponent,
  ],
  exports: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ProductsModule
  ]
})
export class HomeModule {
}
