import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Data } from 'src/app/interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {
   
  mapboxKey:string='pk.eyJ1Ijoic2FudHlnYXJjZXMiLCJhIjoiY2tzeGU2bTltMXI1ejJ2bWx6NGhpc254ciJ9.75Owz-hObZf5MxQfZkxLMg'

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = -31.5352919 ;
  lng = -68.5245826 ;
  zoom = 13;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = this.mapboxKey;
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    }
    createMarker(long: number, lat: number,store:Data) {
      if(long==0&&lat==0){
        return
      }
      let popup = new mapboxgl.Popup({ offset: 45 }).setHTML(
       '<h1>'+store.title+'</h1>'+
       '<hr></hr>'+
       '<p>'+store.descrip+'</p>'+
       '<a  type="button" class="btn btn-success" href="/store/view/'+store.id+'"'+'>'+"Ver tienda"+'</a>'
        );
      const marker = new mapboxgl.Marker({
          draggable: false
        }).setLngLat([long, lat])
        .setPopup(popup) 
        .addTo(this.map);
    }
}
