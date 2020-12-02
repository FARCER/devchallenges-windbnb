import {Component, OnInit} from '@angular/core';
import {PlacesRequestsService} from '../../services/places-requests.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  constructor(
    private placesRequestsService: PlacesRequestsService
    ) {
  }

  ngOnInit(): void {
  }

}
