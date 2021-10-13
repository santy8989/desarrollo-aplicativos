import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { AdminStoresComponent } from "./components/admin-stores/admin-stores.component";
import { LandingStoresComponent } from "./components/landing-stores/landing-stores.component";
import { StoreViewComponent } from "./components/store-view/store-view.component";




const routes: Routes = [
  {
    path:'',
    children: [
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
      
      {
        path: 'store/view/:id',
        component: StoreViewComponent,
        pathMatch: 'full'
      },
      // {
      //   path: '**',
      //   redirectTo: 'store'
      // }
    ]
  }
]

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
