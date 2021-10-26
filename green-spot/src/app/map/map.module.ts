import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { StoreModule } from '../stores/store.module';
import { MapRoutingModule } from './map-routing.module';
import { MarkerMapComponent } from './components/marker-map/marker-map.component';
// import { MarkerMapComponent } from './marker-map/marker-map.component';




@NgModule({
  declarations: [
    MarkerMapComponent
  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MapRoutingModule,
    SharedModule
  ]
})
export class MapModule {
}
