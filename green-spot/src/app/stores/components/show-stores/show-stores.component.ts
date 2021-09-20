import { Component, OnInit } from '@angular/core';
import { Store } from '../../interfaces/store.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-show-stores',
  templateUrl: './show-stores.component.html',
  styleUrls: ['./show-stores.component.css']
})
export class ShowStoresComponent implements OnInit {
  tiendas: Store[]

  constructor(private _storeService: StoreService) { }

  ngOnInit(): void {
    this._storeService.getStores().subscribe(response => {
      console.log("tiendas",response);
      this.tiendas = response;
    }, error => {
      console.error("tuve un Error" + error)
      
    })
  }

}
