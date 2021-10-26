import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkerMapComponent } from './components/marker-map/marker-map.component';


const routes: Routes = [
  {
    path:'',
    component:MarkerMapComponent,
    pathMatch:'full'
    
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
export class MapRoutingModule { }
