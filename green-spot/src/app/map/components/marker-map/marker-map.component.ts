import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/stores/services/store.service';
import { MapService } from '../../services/map.service';


@Component({
  selector: 'app-marker-map',
  templateUrl: './marker-map.component.html',
  styleUrls: ['./marker-map.component.css']
})
export class MarkerMapComponent implements OnInit {

  constructor(
    private map: MapService,
    private _storeService: StoreService,) 
  { }

  ngOnInit(): void {
    this.map.buildMap();
    this._storeService.getStores().subscribe(response => {
      response.map(store => {
        this.map.createMarker(store.lat, store.lon);;
      })
    }, error => {
      console.error("tuve un Error" + error)
    })
  }

}
