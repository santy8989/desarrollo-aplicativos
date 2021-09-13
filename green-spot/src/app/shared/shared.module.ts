import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { NavHeaderComponent } from './nav-header/nav-header.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CardComponent } from './card/card.component'



@NgModule({
  declarations: [
    SidenavComponent,
    NavHeaderComponent,
    ImageSliderComponent,
    CardComponent
  ],
  exports: [
    SidenavComponent,
    NavHeaderComponent,
    ImageSliderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class SharedModule {
}
