import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from '../../interfaces/product.interface';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  productos: Product[]
  @Input () page_size: number;
  page_number: number=1
  pageSizeOptions: number[]=[5,10,15,20]
  constructor( private _productService: ProductService) { }

  ngOnInit(): void {
    
    this._productService.getProducts().subscribe(response => {
      console.log(response);
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
