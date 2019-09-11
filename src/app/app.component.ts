/// <reference types="@types/googlemaps" />
import { Component } from '@angular/core';
import {GoogleMapsOverlay} from '@deck.gl/google-maps';
import {BitmapLayer} from '@deck.gl/layers';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  title = 'My first AGM project';
  lat = 37.787538738205295;
  lng = -122.46494293212889;
  googleMap: google.maps.Map;
  overlay;

  setGoogleMap = (map: google.maps.Map): void => {
    this.googleMap = map;
    this.overlay = new GoogleMapsOverlay({layers: [
      new BitmapLayer({
        id: 'bitmap-layer',
        bounds: [-122.5190, 37.7045, -122.355, 37.829],
        image: 'https://i.imgur.com/4AiXzf8.jpg'
      })
    ]});
    this.overlay.setMap(this.googleMap);

  };
}
