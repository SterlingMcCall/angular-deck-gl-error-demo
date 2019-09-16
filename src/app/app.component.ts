/// <reference types="@types/googlemaps" />
import { Component } from '@angular/core';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import { GeoJsonLayer } from '@deck.gl/layers';
import {RANDOM_GEOJSON_AROUND_SF} from './geojson';

const AIR_PORTS = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat = 37.76392978442339;
  lng = -122.41996765136719;
  googleMap: google.maps.Map;
  overlay;

  data = RANDOM_GEOJSON_AROUND_SF;

  setGoogleMap = (map: google.maps.Map): void => {
    this.googleMap = map;
    this.overlay = new GoogleMapsOverlay({
      layers: [
        new GeoJsonLayer({
          id: 'geojson-layer',
          data: this.data,
          pickable: true,
          stroked: true,
          filled: true,
          extruded: true,
          lineWidthScale: 20,
          getElevation: () => 10000,
          lineWidthMinPixels: 2,
          getFillColor: [255, 160, 0],
          getLineColor: () => [255, 0, 0],
        })
      ]
    });
    this.overlay.setMap(this.googleMap);

  };
}
