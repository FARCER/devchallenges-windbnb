import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaceComponent} from './components/place/place.component';
import {PlacesComponent} from './components/places/places.component';
import {PlacesRequestsService} from './services/places-requests.service';

@NgModule({
  declarations: [
    PlaceComponent,
    PlacesComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    PlacesRequestsService
  ],
  exports: [
    PlaceComponent,
    PlacesComponent
  ]
})
export class PlacesModule {
}
