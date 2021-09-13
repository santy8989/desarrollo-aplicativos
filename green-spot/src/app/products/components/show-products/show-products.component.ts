import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  productos: Product[]
  constructor( private _productService: ProductService) { }

  ngOnInit(): void {
    console.log("hjolas")
    this._productService.getProducts().subscribe(response => {
      console.log(response);
      this.productos = response;
    }, error => {
      console.error("tuve un Error" + error)
      
    })
  }

}
