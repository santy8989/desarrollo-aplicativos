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
import { CardComponent } from './card/card.component';
import { CategoriesComponent } from './categories/categories.component';
import { CoverImageComponent } from './cover-image/cover-image.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LongCardComponent } from './long-card/long-card.component';
import { PaginatePipe } from '../pipes/paginate.pipe';



@NgModule({
  declarations: [
    SidenavComponent,
    NavHeaderComponent,
    ImageSliderComponent,
    CardComponent,
    CategoriesComponent,
    CoverImageComponent,
    DataTableComponent,
    DialogBoxComponent,
    LongCardComponent,
    PaginatePipe

  ],
  exports: [
    SidenavComponent,
    NavHeaderComponent,
    ImageSliderComponent,
    CardComponent,
    CategoriesComponent,
    CoverImageComponent,
    DataTableComponent,
    DialogBoxComponent,
    MatPaginatorModule,
    MatSortModule,
    LongCardComponent,
    PaginatePipe

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
