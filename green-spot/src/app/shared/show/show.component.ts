import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {ProductService} from "../../products/services/product.service";
import { Data } from '../../interfaces/data.interface'
import { StoreService } from '../../stores/services/store.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  content: Data[]
  @Input () page_size: number;
  @Input () type: string;
  page_number: number=1
  pageSizeOptions: number[]=[5,10,15,20]
  isLoad:boolean=false
  constructor(private _productService: ProductService,
    private _storeService: StoreService) 
      { 
        
      }

  ngOnInit(): void {
    if(this.type=="producto"){
      this.getProducts()
    }else{
      this.getStores()
    }
    
   
  }
  getProducts(){
    this._productService.getProducts().subscribe(response => {
      this.isLoad=true;
      this.content = response;
    }, error => {
      console.error("tuve un Error" + error)
      
    })
  }
  getStores(){
    this._storeService.getStores().subscribe(response => {
      this.isLoad=true;
      this.content = response;
    }, error => {
      console.error("tuve un Error" + error)
      
    })
  }
  
  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex +1

  }

}
