import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from '../../interfaces/product.interface';
import {ProductService} from "../../services/product.service";
import { Data } from '../../../interfaces/data.interface';


@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  productos: Data[]
  @Input () page_size: number;
  page_number: number=1
  pageSizeOptions: number[]=[5,10,15,20]
  isLoad:boolean=false
  constructor( private _productService: ProductService) { }

  ngOnInit(): void {
    
    this._productService.getProducts().subscribe(response => {
      this.isLoad=true;
      this.productos = response;
    }, error => {
      console.error("tuve un Error" + error)
      
    })
  }
  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex +1

  }

}
