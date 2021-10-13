import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { LandingComponent } from './components/landing/landing.component';



const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'home',
        component: LandingComponent,
        pathMatch: 'full'
      },
      // {
      //   path: '**',
      //   redirectTo: 'home'
      // },
      
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
export class HomeRoutingModule { }
