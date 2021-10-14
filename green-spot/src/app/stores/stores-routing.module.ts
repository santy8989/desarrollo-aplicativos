import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { AdminStoresComponent } from "./components/admin-stores/admin-stores.component";
import { LandingStoresComponent } from "./components/landing-stores/landing-stores.component";
import { StoreViewComponent } from "./components/store-view/store-view.component";




const routes: Routes = [
  {
    path:'',
    component: LandingStoresComponent,
    pathMatch: 'full',
  },
  {
    path:'admin',
    component:AdminStoresComponent
  },
  {
  path:'view/:id',
  component:StoreViewComponent
  }


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class StoreRoutingModule { }
