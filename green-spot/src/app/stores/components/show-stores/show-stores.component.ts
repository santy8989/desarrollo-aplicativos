import { Component, Input, OnInit } from '@angular/core';
// import { Store } from '../../interfaces/store.interface';
import { StoreService } from '../../services/store.service';
import { Data } from '../../../interfaces/data.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-show-stores',
  templateUrl: './show-stores.component.html',
  styleUrls: ['./show-stores.component.css']
})
export class ShowStoresComponent implements OnInit {
  tiendas: Data[]
  @Input () page_size: number;
  page_number: number=1
  pageSizeOptions: number[]=[4,8,16,20]
  isLoad:boolean=false
  constructor(private _storeService: StoreService) { }

  ngOnInit(): void {
    this._storeService.getStores().subscribe(response => {
      this.isLoad=true;
      this.tiendas = response;
    }, error => {
      console.error("tuve un Error" + error)
      
    })
  }
  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex +1

  }

}
