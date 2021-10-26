import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

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
  zoom = 15;
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
    // this.createMarker(-68.5245826, -31.5352919);
    }
    createMarker(long: number, lat: number) {
      if(long==0&&lat==0){
        return
      }

      const marker = new mapboxgl.Marker({
          draggable: false
        }).setLngLat([long, lat])
        .addTo(this.map);
      marker.on('drag', () => {
  
  
  
      });
     
  
    }
}
