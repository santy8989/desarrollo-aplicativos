import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {RegistroComponent} from "./pages/registro/registro.component";
import { LandingComponent } from '../home/components/landing/landing.component';
import { AdminProductsComponent } from '../products/components/admin-products/admin-products.component';
// import {LoginGuard} from "../shared/guards/LoginGuard";

const routes: Routes = [
  {
    path:'',
    // component:LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      
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
  ], providers: [
    // LoginGuard
  ]
})
export class AuthRoutingModule { }
