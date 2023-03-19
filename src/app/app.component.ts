import { AfterViewInit, Component } from '@angular/core';

// declare const mapboxgl: any;
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'mapbox-with-angular';
  map: any;
  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiYmV0YXBjaG9pMTBrIiwiYSI6ImNrY2ZuaWEwNjA2ZW0yeWw4bG9yNnUyYm0ifQ.bFCQ-5yq6cSsrhugfxO2_Q',
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    this.map.addControl(new mapboxgl.GeolocateControl());
  }
}
