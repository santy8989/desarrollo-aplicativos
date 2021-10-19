import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { LandingStoresComponent } from './components/landing-stores/landing-stores.component';
import { AdminStoresComponent } from './components/admin-stores/admin-stores.component';
import { SharedModule } from '../shared/shared.module';
import { StoreViewComponent } from './components/store-view/store-view.component';
import { StoreRoutingModule } from './stores-routing.module';




@NgModule({
  declarations: [
    LandingStoresComponent,
    AdminStoresComponent,
    StoreViewComponent, 
  ],
  exports: [
    LandingStoresComponent,   
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule, 
    StoreRoutingModule
  ]
})
export class StoreModule {
}
