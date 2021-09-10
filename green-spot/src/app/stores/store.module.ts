import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { LandingStoresComponent } from './components/landing-stores/landing-stores.component';
import { AdminStoresComponent } from './components/admin-stores/admin-stores.component';



@NgModule({
  declarations: [
    LandingStoresComponent,
    AdminStoresComponent
  ],
  exports: [
    LandingStoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class StoreModule {
}
