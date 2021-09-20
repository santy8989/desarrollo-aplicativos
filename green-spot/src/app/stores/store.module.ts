import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { LandingStoresComponent } from './components/landing-stores/landing-stores.component';
import { AdminStoresComponent } from './components/admin-stores/admin-stores.component';
import { SharedModule } from '../shared/shared.module';
import { ShowStoresComponent } from '../stores/components/show-stores/show-stores.component';



@NgModule({
  declarations: [
    LandingStoresComponent,
    AdminStoresComponent,
    ShowStoresComponent
  ],
  exports: [
    LandingStoresComponent,
    ShowStoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class StoreModule {
}
