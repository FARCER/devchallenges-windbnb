import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaceComponent} from './components/place/place.component';
import {PlacesComponent} from './components/places/places.component';

@NgModule({
  declarations: [
    PlaceComponent,
    PlacesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlaceComponent,
    PlacesComponent
  ]
})
export class PlacesModule {
}
